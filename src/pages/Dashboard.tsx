import { useAuth } from '../contexts/AuthContext'
import { AdminDashboard } from '../components/dashboard/AdminDashboard'
import { LivreurDashboard } from '../components/dashboard/LivreurDashboard'
import { ClientDashboard } from '../components/dashboard/ClientDashboard'
import { Navigate } from 'react-router-dom'

export const Dashboard: React.FC = () => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/" replace />
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'admin':
        return <AdminDashboard />
      case 'livreur':
        return <LivreurDashboard />
      case 'client':
      default:
        return <ClientDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderDashboard()}
      </div>
    </div>
  )
}