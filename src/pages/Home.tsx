import React, { Suspense, lazy } from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'

// Lazy load ChatBot since it's not critical for initial render
const ChatBot = lazy(() => import('../components/ChatBot').then(module => ({ default: module.ChatBot })))

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
    </div>
  )
}