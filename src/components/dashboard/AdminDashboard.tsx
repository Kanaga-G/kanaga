import React, { useState } from 'react'
import { Users, Package, DollarSign, TrendingUp, Calendar } from 'lucide-react'

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const stats = [
    {
      title: 'Clients actifs',
      value: '1,234',
      change: '+12%',
      icon: <Users className="w-8 h-8 text-primary-600" />,
      color: 'bg-primary-100'
    },
    {
      title: 'Commandes du jour',
      value: '56',
      change: '+8%',
      icon: <Package className="w-8 h-8 text-success-600" />,
      color: 'bg-success-100'
    },
    {
      title: 'Chiffre d\'affaires',
      value: '2.5M FCFA',
      change: '+15%',
      icon: <DollarSign className="w-8 h-8 text-warning-600" />,
      color: 'bg-warning-100'
    },
    {
      title: 'Taux satisfaction',
      value: '98%',
      change: '+2%',
      icon: <TrendingUp className="w-8 h-8 text-success-600" />,
      color: 'bg-success-100'
    }
  ]

  const recentOrders = [
    { id: '#001', client: 'Aminata Diallo', service: 'Pressing', status: 'En cours', amount: '3500 FCFA' },
    { id: '#002', client: 'Mamadou Sy', service: 'Couture', status: 'Terminé', amount: '15000 FCFA' },
    { id: '#003', client: 'Fatou Ndiaye', service: 'Livraison', status: 'En attente', amount: '2000 FCFA' },
    { id: '#004', client: 'Omar Ba', service: 'Pressing', status: 'En cours', amount: '4500 FCFA' },
  ]

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'orders', name: 'Commandes', icon: <Package className="w-4 h-4" /> },
    { id: 'clients', name: 'Clients', icon: <Users className="w-4 h-4" /> },
    { id: 'settings', name: 'Paramètres', icon: <Calendar className="w-4 h-4" /> },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En attente':
        return 'bg-warning-100 text-warning-800'
      case 'En cours':
        return 'bg-primary-100 text-primary-800'
      case 'Terminé':
        return 'bg-success-100 text-success-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Tableau de bord Administrateur
        </h1>
        <p className="text-gray-600 mt-2">
          Gérez votre entreprise Madina Services
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-success-600 mt-1">{stat.change} ce mois</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="card">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Commandes récentes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {order.client}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {order.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {order.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Other tabs content */}
      {activeTab === 'orders' && (
        <div className="card p-8 text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Gestion des commandes
          </h3>
          <p className="text-gray-600">
            Interface de gestion détaillée des commandes à venir
          </p>
        </div>
      )}

      {activeTab === 'clients' && (
        <div className="card p-8 text-center">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Gestion des clients
          </h3>
          <p className="text-gray-600">
            Interface de gestion de la base clients à venir
          </p>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="card p-8 text-center">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Paramètres
          </h3>
          <p className="text-gray-600">
            Configuration des paramètres système à venir
          </p>
        </div>
      )}
    </div>
  )
}