import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AuthModal } from './components/modals/AuthModal'
import { useAuth } from './contexts/AuthContext'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const Reservation = lazy(() => import('./pages/Reservation').then(m => ({ default: m.Reservation })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })))

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
        {showAuthModal && <AuthModal />}
      </Layout>
    </Router>
  )
}

export default App