import React, { useState } from 'react'
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react'

interface FormData {
  service: string
  name: string
  phone: string
  email: string
  address: string
  date: string
  time: string
  description: string
}

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    description: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const services = [
    { id: 'pressing', name: 'Pressing Professionnel', price: 'À partir de 1500 FCFA' },
    { id: 'couture', name: 'Atelier de Couture', price: 'À partir de 5000 FCFA' },
    { id: 'livraison', name: 'Livraison à Domicile', price: 'Gratuite dès 10000 FCFA' },
    { id: 'express', name: 'Service Express', price: 'Supplément 50%' }
  ]

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in">
          <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-success-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Réservation Confirmée !
          </h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre réservation. Nous vous contacterons bientôt pour confirmer les détails.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Détails de votre réservation :</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Service :</strong> {services.find(s => s.id === formData.service)?.name}</p>
              <p><strong>Date :</strong> {new Date(formData.date).toLocaleDateString('fr-FR')}</p>
              <p><strong>Heure :</strong> {formData.time}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                service: '', name: '', phone: '', email: '',
                address: '', date: '', time: '', description: ''
              })
            }}
            className="btn-primary w-full"
          >
            Nouvelle réservation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 bg-gray-50">
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Réserver un Service
          </h1>
          <p className="text-xl">
            Remplissez le formulaire ci-dessous pour réserver nos services
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Service Selection */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Sélectionnez votre service
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`cursor-pointer p-4 border-2 rounded-xl transition-all ${
                          formData.service === service.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={handleInputChange}
                          className="sr-only"
                          required
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Informations personnelles
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de collecte *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Date and Time */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Date et heure
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Date souhaitée *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Heure préférée *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      >
                        <option value="">Sélectionner une heure</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium">Zone de livraison :</p>
                          <p>Dakar, Guédiawaye, Pikine, Rufisque</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructions spéciales (optionnel)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="input-field"
                    placeholder="Décrivez vos besoins spécifiques, type de vêtements, instructions particulières..."
                  />
                </div>

                {/* Submit Button */}
                <div className="lg:col-span-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Traitement en cours...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Confirmer la réservation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}