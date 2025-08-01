import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

// Function to send metrics to analytics service
function sendToAnalytics(metric: any) {
  // In production, you would send this to your analytics service
  // For now, we'll log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals Metric:', metric)
  }
  
  // Example of sending to Google Analytics 4
  // gtag('event', metric.name, {
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_category: 'Web Vitals',
  //   event_label: metric.id,
  //   non_interaction: true,
  // })
}

// Initialize Web Vitals tracking
export function initPerformanceTracking() {
  // Track Core Web Vitals
  getCLS(sendToAnalytics)    // Cumulative Layout Shift
  getFID(sendToAnalytics)    // First Input Delay
  getFCP(sendToAnalytics)    // First Contentful Paint
  getLCP(sendToAnalytics)    // Largest Contentful Paint
  getTTFB(sendToAnalytics)   // Time to First Byte
}

// Performance observer for additional metrics
export function trackCustomMetrics() {
  // Track navigation timing
  if ('performance' in window && 'getEntriesByType' in performance) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          tls: navigation.secureConnectionStart ? navigation.connectEnd - navigation.secureConnectionStart : 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          download: navigation.responseEnd - navigation.responseStart,
          dom: navigation.domContentLoadedEventEnd - navigation.responseEnd,
          total: navigation.loadEventEnd - navigation.navigationStart,
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Navigation Timing:', metrics)
        }
      }
    })
  }
  
  // Track resource loading performance
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming
          
          // Log slow resources (>1000ms)
          if (resource.duration > 1000) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('Slow resource detected:', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize,
              })
            }
          }
        }
      })
    })
    
    observer.observe({ entryTypes: ['resource'] })
  }
}

// Track bundle size performance
export function trackBundlePerformance() {
  if ('performance' in window && 'getEntriesByType' in performance) {
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      
      let totalJSSize = 0
      let totalCSSSize = 0
      let jsFiles = 0
      let cssFiles = 0
      
      resources.forEach((resource) => {
        if (resource.name.includes('.js')) {
          totalJSSize += resource.transferSize || 0
          jsFiles++
        } else if (resource.name.includes('.css')) {
          totalCSSSize += resource.transferSize || 0
          cssFiles++
        }
      })
      
      const bundleMetrics = {
        totalJSSize: Math.round(totalJSSize / 1024), // KB
        totalCSSSize: Math.round(totalCSSSize / 1024), // KB
        jsFiles,
        cssFiles,
        totalSize: Math.round((totalJSSize + totalCSSSize) / 1024), // KB
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Bundle Performance:', bundleMetrics)
      }
      
      // Warn if bundle size is too large
      if (bundleMetrics.totalSize > 500) {
        console.warn(`Bundle size is ${bundleMetrics.totalSize}KB, consider code splitting or optimization`)
      }
    })
  }
}