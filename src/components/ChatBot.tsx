import React, { useState, useCallback, useMemo, memo } from 'react'
import { MessageCircle, Send, X, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

// Memoized message component to prevent unnecessary re-renders
const MessageItem = memo<{ message: Message }>(({ message }) => (
  <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-3`}>
    <div className={`max-w-xs px-4 py-2 rounded-lg ${
      message.isBot 
        ? 'bg-gray-100 text-gray-800' 
        : 'bg-primary-600 text-white'
    }`}>
      <p className="text-sm">{message.text}</p>
      <p className="text-xs opacity-70 mt-1">
        {message.timestamp.toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </p>
    </div>
  </div>
))

MessageItem.displayName = 'MessageItem'

export const ChatBot: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant virtuel de Madina Services. Comment puis-je vous aider aujourd\'hui ?',
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  // Memoize predefined responses to prevent recreation on every render
  const predefinedResponses = useMemo(() => ({
    'tarif': 'Nos tarifs varient selon le service : Pressing à partir de 1500 FCFA, Couture à partir de 5000 FCFA. Contactez-nous pour un devis personnalisé !',
    'horaire': 'Nous sommes ouverts du lundi au vendredi de 8h à 18h, et le samedi de 9h à 16h.',
    'livraison': 'Nous proposons un service de livraison gratuite dès 10000 FCFA d\'achat. La livraison se fait en 24-48h.',
    'service': 'Nous proposons du pressing professionnel, de la couture sur mesure et un service de livraison à domicile.',
    'contact': 'Vous pouvez nous contacter au +221 77 123 45 67 ou par email à contact@madina-services.sn'
  }), [])

  const getBotResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
      return 'Bonjour ! Comment puis-je vous aider avec nos services de pressing et couture ?'
    }
    
    return 'Je ne suis pas sûr de comprendre votre question. Pourriez-vous me demander des informations sur nos tarifs, horaires, services ou livraison ?'
  }, [predefinedResponses])

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }, [inputValue, getBotResponse])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }, [handleSendMessage])

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  // Memoize the messages list to prevent unnecessary re-renders
  const messagesList = useMemo(() => (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  ), [messages])

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 transform hover:scale-110 z-40 ${
          isOpen ? 'hidden' : 'block'
        }`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl border z-50 flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Assistant Madina</h3>
                <p className="text-xs text-primary-100">En ligne</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-primary-100 transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          {messagesList}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                aria-label="Envoyer le message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

ChatBot.displayName = 'ChatBot'