import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Reservation } from './pages/Reservation'
import { Contact } from './pages/Contact'
import { Dashboard } from './pages/Dashboard'
import { AuthModal } from './components/modals/AuthModal'
import { useAuth } from './contexts/AuthContext'

function App() {
  const { showAuthModal } = useAuth()

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {showAuthModal && <AuthModal />}
      </Layout>
    </Router>
  )
}

export default App