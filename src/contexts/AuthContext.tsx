import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

interface User {
  id: string
  email: string
  name: string
  role: 'client' | 'admin' | 'livreur'
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  showAuthModal: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  openAuthModal: () => void
  closeAuthModal: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)

  useEffect(() => {
    // Simulate checking for existing auth session
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('user')
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuth()
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email et mot de passe sont requis')
    }
    void password; // Suppress unused parameter warning

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : email.includes('livreur') ? 'livreur' : 'client'
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setShowAuthModal(false)
    } catch (error) {
      throw new Error('Erreur de connexion')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(async (email: string, password: string, name: string) => {
    if (!email || !password || !name) {
      throw new Error('Tous les champs sont requis')
    }
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email,
        name,
        role: 'client'
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setShowAuthModal(false)
    } catch (error) {
      throw new Error('Erreur d\'inscription')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('user')
  }, [])

  const openAuthModal = useCallback(() => setShowAuthModal(true), [])
  const closeAuthModal = useCallback(() => setShowAuthModal(false), [])

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo<AuthContextType>(() => ({
    user,
    isLoading,
    showAuthModal,
    login,
    register,
    logout,
    openAuthModal,
    closeAuthModal
  }), [user, isLoading, showAuthModal, login, register, logout, openAuthModal, closeAuthModal])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}