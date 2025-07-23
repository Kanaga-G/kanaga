import React from 'react'
import { Shirt, Scissors, Truck, Clock, Star, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Shirt className="w-16 h-16 text-primary-600" />,
      title: 'Pressing Professionnel',
      description: 'Service de nettoyage et repassage professionnel pour tous types de vêtements',
      features: [
        'Nettoyage à sec écologique',
        'Repassage vapeur haute qualité',
        'Détachage spécialisé',
        'Traitement des vêtements délicats',
        'Service express disponible'
      ],
      pricing: [
        { item: 'Chemise/Blouse', price: '1 500 FCFA' },
        { item: 'Pantalon/Jupe', price: '2 000 FCFA' },
        { item: 'Veste/Blazer', price: '3 000 FCFA' },
        { item: 'Robe', price: '2 500 FCFA' },
        { item: 'Costume complet', price: '5 000 FCFA' }
      ],
      duration: '24-48h'
    },
    {
      id: 2,
      icon: <Scissors className="w-16 h-16 text-success-600" />,
      title: 'Atelier de Couture',
      description: 'Confection sur mesure et retouches par nos tailleurs expérimentés',
      features: [
        'Confection sur mesure',
        'Retouches et ajustements',
        'Réparations expertes',
        'Création de modèles uniques',
        'Conseils personnalisés'
      ],
      pricing: [
        { item: 'Retouche simple', price: '2 000 FCFA' },
        { item: 'Ajustement complet', price: '5 000 FCFA' },
        { item: 'Confection robe', price: '25 000 FCFA' },
        { item: 'Costume sur mesure', price: '50 000 FCFA' },
        { item: 'Réparation', price: '3 000 FCFA' }
      ],
      duration: '3-7 jours'
    },
    {
      id: 3,
      icon: <Truck className="w-16 h-16 text-warning-600" />,
      title: 'Livraison à Domicile',
      description: 'Service de collecte et livraison pour votre confort',
      features: [
        'Collecte gratuite à domicile',
        'Livraison rapide 24-48h',
        'Suivi en temps réel',
        'Service programmé',
        'Zone de livraison étendue'
      ],
      pricing: [
        { item: 'Livraison standard', price: 'Gratuite dès 10 000 FCFA' },
        { item: 'Livraison express', price: '2 000 FCFA' },
        { item: 'Collecte uniquement', price: '1 000 FCFA' },
        { item: 'Service programmé', price: '1 500 FCFA' }
      ],
      duration: 'Même jour possible'
    }
  ]

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Des solutions complètes pour l'entretien et la confection de vos vêtements
          </p>
          <Link
            to="/reservation"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    {service.icon}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {service.title}
                      </h2>
                      <div className="flex items-center space-x-2 mt-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Caractéristiques :
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/reservation"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Réserver ce service</span>
                    <Star className="w-4 h-4" />
                  </Link>
                </div>

                {/* Pricing Card */}
                <div className="flex-1 max-w-md">
                  <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                      Nos Tarifs
                    </h3>
                    <div className="space-y-4">
                      {service.pricing.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                        >
                          <span className="text-gray-700">{item.item}</span>
                          <span className="font-semibold text-primary-600">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-sm text-primary-700 text-center">
                        <Star className="w-4 h-4 inline mr-1" />
                        Devis gratuit pour les commandes importantes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à profiter de nos services ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Réservez dès maintenant ou contactez-nous pour un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation" className="btn-primary">
              Réserver maintenant
            </Link>
            <Link to="/contact" className="btn-secondary">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}