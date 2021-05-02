import { createContext, ReactNode, useContext } from 'react'

interface AuthContextTypes {
  name: string
}

const AuthContext = createContext<AuthContextTypes>(null!)

export function useAuth() {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({children}:AuthProviderProps) {
  const value = {
    name: 'destin'
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}