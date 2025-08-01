import React, { useState, useCallback, useMemo, memo } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// Memoized contact info item component
const ContactInfoItem = memo<{
  icon: React.ReactNode
  title: string
  details: string[]
  action: string
}>(({ icon, title, details, action }) => (
  <div className="card p-6 text-center hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="space-y-1 mb-4">
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">{detail}</p>
      ))}
    </div>
    <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
      {action}
    </button>
  </div>
))

ContactInfoItem.displayName = 'ContactInfoItem'

export const Contact: React.FC = memo(() => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Memoize contact info data
  const contactInfo = useMemo(() => [
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: 'Téléphone',
      details: ['+221 77 123 45 67', '+221 33 123 45 67'],
      action: 'Appelez-nous maintenant'
    },
    {
      icon: <Mail className="w-6 h-6 text-success-600" />,
      title: 'Email',
      details: ['contact@madina-services.sn', 'info@madina-services.sn'],
      action: 'Envoyez-nous un email'
    },
    {
      icon: <MapPin className="w-6 h-6 text-warning-600" />,
      title: 'Adresse',
      details: ['Dakar, Sénégal', 'Zone de livraison étendue'],
      action: 'Voir sur la carte'
    },
    {
      icon: <Clock className="w-6 h-6 text-error-600" />,
      title: 'Horaires',
      details: ['Lun-Ven: 8h-18h', 'Sam: 9h-16h', 'Dim: Fermé'],
      action: 'Planifier une visite'
    }
  ], [])

  // Memoize subjects list
  const subjects = useMemo(() => [
    'Demande de devis',
    'Information sur les services',
    'Réclamation',
    'Partenariat',
    'Autre'
  ], [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }, [])

  // Memoize contact info grid
  const contactInfoGrid = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {contactInfo.map((info, index) => (
        <ContactInfoItem key={index} {...info} />
      ))}
    </div>
  ), [contactInfo])

  // Memoize form fields
  const formFields = useMemo(() => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="input-field"
            placeholder="Votre nom complet"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="input-field"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="input-field"
            placeholder="+221 77 123 45 67"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="input-field"
          >
            <option value="">Sélectionnez un sujet</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="input-field"
          placeholder="Décrivez votre demande..."
        />
      </div>
    </>
  ), [formData, handleInputChange, subjects])

  return (
    <div className="py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {contactInfoGrid}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-success-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Message envoyé !
                </h3>
                <p className="text-gray-600">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields}
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Envoi en cours...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
})

Contact.displayName = 'Contact'