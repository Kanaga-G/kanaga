import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { initPerformanceTracking, trackCustomMetrics, trackBundlePerformance } from './utils/performance'

// Initialize performance tracking
if (typeof window !== 'undefined') {
  // Track Web Vitals
  initPerformanceTracking()
  
  // Track custom metrics
  trackCustomMetrics()
  
  // Track bundle performance
  trackBundlePerformance()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)