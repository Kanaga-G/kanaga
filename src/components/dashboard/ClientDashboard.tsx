import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Package, Clock, CheckCircle, XCircle, Plus, Calendar, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Reservation {
  id: string
  service: string
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled'
  date: string
  price: number
  description: string
}

export const ClientDashboard: React.FC = () => {
  const { user } = useAuth()

  // Mock data
  const [reservations] = useState<Reservation[]>([
    {
      id: '1',
      service: 'Pressing Professionnel',
      status: 'in-progress',
      date: '2024-01-15',
      price: 3500,
      description: '2 chemises, 1 pantalon'
    },
    {
      id: '2',
      service: 'Atelier de Couture',
      status: 'completed',
      date: '2024-01-10',
      price: 15000,
      description: 'Retouche robe de soirée'
    },
    {
      id: '3',
      service: 'Livraison Express',
      status: 'pending',
      date: '2024-01-20',
      price: 2000,
      description: 'Collecte à domicile'
    }
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-warning-600" />
      case 'in-progress':
        return <Package className="w-5 h-5 text-primary-600" />
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success-600" />
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-error-600" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'En attente'
      case 'in-progress':
        return 'En cours'
      case 'completed':
        return 'Terminé'
      case 'cancelled':
        return 'Annulé'
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-warning-100 text-warning-800'
      case 'in-progress':
        return 'bg-primary-100 text-primary-800'
      case 'completed':
        return 'bg-success-100 text-success-800'
      case 'cancelled':
        return 'bg-error-100 text-error-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = [
    {
      title: 'Réservations actives',
      value: reservations.filter(r => r.status === 'in-progress' || r.status === 'pending').length,
      icon: <Package className="w-8 h-8 text-primary-600" />,
      color: 'bg-primary-100'
    },
    {
      title: 'Services terminés',
      value: reservations.filter(r => r.status === 'completed').length,
      icon: <CheckCircle className="w-8 h-8 text-success-600" />,
      color: 'bg-success-100'
    },
    {
      title: 'Total dépensé',
      value: `${reservations.reduce((sum, r) => sum + r.price, 0).toLocaleString()} FCFA`,
      icon: <Star className="w-8 h-8 text-warning-600" />,
      color: 'bg-warning-100'
    }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Bonjour, {user?.name} !
        </h1>
        <p className="text-gray-600 mt-2">
          Gérez vos réservations et suivez vos commandes
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/reservation"
            className="card p-4 hover:shadow-md transition-shadow flex items-center space-x-4"
          >
            <div className="bg-primary-100 p-3 rounded-lg">
              <Plus className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Nouvelle réservation</h3>
              <p className="text-sm text-gray-600">Réserver un service</p>
            </div>
          </Link>

          <Link
            to="/services"
            className="card p-4 hover:shadow-md transition-shadow flex items-center space-x-4"
          >
            <div className="bg-success-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-success-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Nos services</h3>
              <p className="text-sm text-gray-600">Découvrir nos offres</p>
            </div>
          </Link>

          <Link
            to="/contact"
            className="card p-4 hover:shadow-md transition-shadow flex items-center space-x-4"
          >
            <div className="bg-warning-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-warning-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Support</h3>
              <p className="text-sm text-gray-600">Nous contacter</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Reservations */}
      <div className="card">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Mes réservations</h2>
        </div>
        <div className="p-6">
          {reservations.length > 0 ? (
            <div className="space-y-4">
              {reservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(reservation.status)}
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {reservation.service}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {reservation.description}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(reservation.date).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}>
                        {getStatusText(reservation.status)}
                      </span>
                      <p className="text-lg font-semibold text-gray-800 mt-2">
                        {reservation.price.toLocaleString()} FCFA
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Aucune réservation
              </h3>
              <p className="text-gray-600 mb-6">
                Vous n'avez pas encore effectué de réservation
              </p>
              <Link to="/reservation" className="btn-primary">
                Faire une réservation
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}