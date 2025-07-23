import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Clock, Shield } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Madina Services
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-200">
              Pressing & Atelier de Couture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour un service de pressing professionnel 
            et un atelier de couture sur mesure
          </p>

          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Qualité Premium</h3>
              <p className="text-blue-100">Service de qualité professionnelle pour tous vos vêtements</p>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <Clock className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-blue-100">Service de livraison à domicile en 24-48h</p>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Satisfaction Garantie</h3>
              <p className="text-blue-100">Vos vêtements traités avec le plus grand soin</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/reservation"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}