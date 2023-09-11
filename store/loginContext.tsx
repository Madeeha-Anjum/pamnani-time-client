'use client'
import { axiosInstance } from '@/api/config'
import TimeeyApi from '@/api/timmeyApi'
import { useSessionStorage } from '@/hooks/useSessionStorage'
import { createContext, useEffect, useState } from 'react'

type InterfaceMenuContext = {
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const LoginContext = createContext<InterfaceMenuContext>(
  {} as InterfaceMenuContext
)

type InterfaceMenuProvider = {
  children: React.ReactNode
}

const LoginProvider: React.FC<InterfaceMenuProvider> = ({ children }) => {
  console.log('LoginProvider')
  const [userCredentials, setUserCredentials] = useSessionStorage<{
    username: string
    password: string
  } | null>('user-credentials', null)

  useEffect(() => {
    console.log('userCredentials', userCredentials)
    if (userCredentials) {
      TimeeyApi.setUserCredentials(
        userCredentials.username,
        userCredentials.password
      )
    }
  }, [userCredentials])

  const login = async (username: string, password: string) => {
    console.log('Logged In', username, password)
    setUserCredentials({ username, password })

    await TimeeyApi.verifyUserCredentials(username, password)

    return
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
