import React, { useState } from 'react'
import { Truck, MapPin, Clock, CheckCircle, Package, Navigation } from 'lucide-react'

interface Delivery {
  id: string
  client: string
  address: string
  service: string
  status: 'assigned' | 'in-transit' | 'delivered'
  scheduledTime: string
  phone: string
}

export const LivreurDashboard: React.FC = () => {

  // Mock data
  const [deliveries] = useState<Delivery[]>([
    {
      id: 'LIV001',
      client: 'Aminata Diallo',
      address: 'Médina, Rue 15 x 20, Dakar',
      service: 'Collecte Pressing',
      status: 'assigned',
      scheduledTime: '09:00',
      phone: '+221 77 123 45 67'
    },
    {
      id: 'LIV002',
      client: 'Mamadou Sy',
      address: 'Plateau, Avenue Pompidou, Dakar',
      service: 'Livraison Couture',
      status: 'in-transit',
      scheduledTime: '11:30',
      phone: '+221 76 987 65 43'
    },
    {
      id: 'LIV003',
      client: 'Fatou Ndiaye',
      address: 'Almadies, Villa 123, Dakar',
      service: 'Livraison Express',
      status: 'delivered',
      scheduledTime: '14:00',
      phone: '+221 78 456 78 90'
    }
  ])

  const stats = [
    {
      title: 'Livraisons du jour',
      value: deliveries.length,
      icon: <Package className="w-8 h-8 text-primary-600" />,
      color: 'bg-primary-100'
    },
    {
      title: 'En cours',
      value: deliveries.filter(d => d.status === 'in-transit').length,
      icon: <Truck className="w-8 h-8 text-warning-600" />,
      color: 'bg-warning-100'
    },
    {
      title: 'Terminées',
      value: deliveries.filter(d => d.status === 'delivered').length,
      icon: <CheckCircle className="w-8 h-8 text-success-600" />,
      color: 'bg-success-100'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'assigned':
        return <Clock className="w-5 h-5 text-warning-600" />
      case 'in-transit':
        return <Truck className="w-5 h-5 text-primary-600" />
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-success-600" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'assigned':
        return 'Assignée'
      case 'in-transit':
        return 'En route'
      case 'delivered':
        return 'Livrée'
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned':
        return 'bg-warning-100 text-warning-800'
      case 'in-transit':
        return 'bg-primary-100 text-primary-800'
      case 'delivered':
        return 'bg-success-100 text-success-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const updateDeliveryStatus = (id: string, newStatus: Delivery['status']) => {
    // In a real app, this would update the database
    console.log(`Updating delivery ${id} to ${newStatus}`)
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Tableau de bord Livreur
        </h1>
        <p className="text-gray-600 mt-2">
          Gérez vos livraisons et collectes
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

      {/* Deliveries List */}
      <div className="card">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Livraisons d'aujourd'hui</h2>
        </div>
        <div className="p-6">
          {deliveries.length > 0 ? (
            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      {getStatusIcon(delivery.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">
                            {delivery.client}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(delivery.status)}`}>
                            {getStatusText(delivery.status)}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{delivery.address}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Package className="w-4 h-4" />
                            <span>{delivery.service}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>Prévu à {delivery.scheduledTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <a
                            href={`tel:${delivery.phone}`}
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                          >
                            Appeler {delivery.phone}
                          </a>
                          <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 text-sm font-medium">
                            <Navigation className="w-4 h-4" />
                            <span>Navigation</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex space-x-3">
                    {delivery.status === 'assigned' && (
                      <button
                        onClick={() => updateDeliveryStatus(delivery.id, 'in-transit')}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Commencer la livraison
                      </button>
                    )}
                    {delivery.status === 'in-transit' && (
                      <button
                        onClick={() => updateDeliveryStatus(delivery.id, 'delivered')}
                        className="btn-success text-sm px-4 py-2"
                      >
                        Marquer comme livrée
                      </button>
                    )}
                    {delivery.status === 'delivered' && (
                      <span className="text-success-600 text-sm font-medium">
                        ✓ Livraison terminée
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Truck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Aucune livraison aujourd'hui
              </h3>
              <p className="text-gray-600">
                Toutes les livraisons ont été effectuées ou aucune n'est programmée
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}