import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  loadTime: number | null
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    loadTime: null
  })

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !process.env.REACT_APP_PERFORMANCE_MONITOR) {
      return
    }

    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = {
        fcp: null,
        lcp: null,
        fid: null,
        cls: null,
        loadTime: null
      }

      // Measure First Contentful Paint
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            newMetrics.fcp = fcpEntry.startTime
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
      }

      // Measure Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          if (lastEntry) {
            newMetrics.lcp = lastEntry.startTime
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      }

      // Measure First Input Delay
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fidEntry = entries[0]
          if (fidEntry) {
            newMetrics.fid = fidEntry.processingStart - fidEntry.startTime
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
      }

      // Measure Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          newMetrics.cls = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      }

      // Measure page load time
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          newMetrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart
        }
      }

      // Update metrics after a delay to allow for measurements
      setTimeout(() => {
        setMetrics(newMetrics)
        
        // Log metrics to console in development
        if (process.env.NODE_ENV === 'development') {
          console.group('🚀 Performance Metrics')
          console.log('First Contentful Paint:', newMetrics.fcp ? `${newMetrics.fcp.toFixed(2)}ms` : 'Not measured')
          console.log('Largest Contentful Paint:', newMetrics.lcp ? `${newMetrics.lcp.toFixed(2)}ms` : 'Not measured')
          console.log('First Input Delay:', newMetrics.fid ? `${newMetrics.fid.toFixed(2)}ms` : 'Not measured')
          console.log('Cumulative Layout Shift:', newMetrics.cls ? newMetrics.cls.toFixed(3) : 'Not measured')
          console.log('Page Load Time:', newMetrics.loadTime ? `${newMetrics.loadTime.toFixed(2)}ms` : 'Not measured')
          console.groupEnd()
        }
      }, 1000)
    }

    measurePerformance()
  }, [])

  // Only render in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !process.env.REACT_APP_PERFORMANCE_MONITOR) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : '...'}</div>
      </div>
    </div>
  )
}