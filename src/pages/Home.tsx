import React from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { ChatBot } from '../components/ChatBot'

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ChatBot />
    </div>
  )
}