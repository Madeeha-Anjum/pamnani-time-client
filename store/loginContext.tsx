'use client'
import TimmeyApi from '@/api/timmeyApi'
import { createContext, useEffect, useState } from 'react'

type InterfaceMenuContext = {
  login: (username: string, password: string) => void
  logout: () => void
}

const LoginContext = createContext<InterfaceMenuContext>(
  {} as InterfaceMenuContext
)

type InterfaceMenuProvider = {
  children: React.ReactNode
}

const LoginProvider: React.FC<InterfaceMenuProvider> = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<{
    username: string
    password: string
  } | null>(null)

  useEffect(() => {
    if (userCredentials) {
      TimmeyApi.setUserCredentials(
        userCredentials.username,
        userCredentials.password
      )
    }
  }, [userCredentials])

  const login = (username: string, password: string) => {
    console.log('Logged In', username, password)
  }
  const logout = () => {
    console.log('Logged out')
  }
  return (
    <LoginContext.Provider value={{ login, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider }
