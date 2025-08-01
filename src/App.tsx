import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Layout } from './components/layout/Layout'
import { useAuth } from './contexts/AuthContext'

// Lazy load pages for better code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })))
const Reservation = lazy(() => import('./pages/Reservation').then(module => ({ default: module.Reservation })))
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })))
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })))
const AuthModal = lazy(() => import('./components/modals/AuthModal').then(module => ({ default: module.AuthModal })))

// Loading component for suspense fallbacks
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
)

function App() {
  const { showAuthModal } = useAuth()

  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
        {showAuthModal && (
          <Suspense fallback={null}>
            <AuthModal />
          </Suspense>
        )}
      </Layout>
    </Router>
  )
}

export default App