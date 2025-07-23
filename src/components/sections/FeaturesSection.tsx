import React from 'react'
import { CheckCircle, Clock, Shield, Users } from 'lucide-react'

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-success-600" />,
      title: 'Qualité Garantie',
      description: 'Nous garantissons la qualité de notre travail et la satisfaction de nos clients.'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: 'Service Rapide',
      description: 'Livraison en 24-48h pour la plupart de nos services avec suivi en temps réel.'
    },
    {
      icon: <Shield className="w-8 h-8 text-warning-600" />,
      title: 'Sécurité Assurée',
      description: 'Vos vêtements sont assurés et traités avec le plus grand soin.'
    },
    {
      icon: <Users className="w-8 h-8 text-success-600" />,
      title: 'Équipe Expérimentée',
      description: 'Une équipe de professionnels expérimentés à votre service.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avantages qui font de Madina Services votre meilleur choix
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}