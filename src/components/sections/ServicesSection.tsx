import React from 'react'
import { Link } from 'react-router-dom'
import { Shirt, Scissors, Truck, Star } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Shirt className="w-12 h-12 text-primary-600" />,
      title: 'Pressing Professionnel',
      description: 'Nettoyage, repassage et entretien de tous types de vêtements avec des produits de qualité.',
      features: ['Nettoyage à sec', 'Repassage vapeur', 'Détachage spécialisé'],
      price: 'À partir de 1500 FCFA'
    },
    {
      icon: <Scissors className="w-12 h-12 text-success-600" />,
      title: 'Atelier de Couture',
      description: 'Confection sur mesure, retouches et réparations par nos tailleurs expérimentés.',
      features: ['Confection sur mesure', 'Retouches', 'Réparations'],
      price: 'À partir de 5000 FCFA'
    },
    {
      icon: <Truck className="w-12 h-12 text-warning-600" />,
      title: 'Livraison à Domicile',
      description: 'Service de collecte et livraison à domicile pour votre confort.',
      features: ['Collecte gratuite', 'Livraison 24-48h', 'Suivi en temps réel'],
      price: 'Livraison gratuite dès 10000 FCFA'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour l'entretien et la confection de vos vêtements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-primary-600 mb-4">
                  {service.price}
                </p>
                <Link
                  to="/reservation"
                  className="btn-primary w-full inline-block text-center"
                >
                  Réserver
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Prêt à essayer nos services ?
          </h3>
          <p className="text-gray-600 mb-8">
            Contactez-nous dès maintenant pour un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation" className="btn-primary">
              Faire une réservation
            </Link>
            <Link to="/contact" className="btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}