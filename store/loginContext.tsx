'use client'
import { createContext, useEffect, useState } from 'react'
import { redirect, usePathname } from 'next/navigation'

type InterfaceMenuContext = {
  basicAuth: string
  setBasicAuth: React.Dispatch<React.SetStateAction<string>>
  logout: () => void
}

const LoginContext = createContext<InterfaceMenuContext>(
  {} as InterfaceMenuContext
)

type InterfaceMenuProvider = {
  children: React.ReactNode
}

const LoginProvider: React.FC<InterfaceMenuProvider> = ({ children }) => {
  const pathname = usePathname()
  const [basicAuth, setBasicAuth] = useState('') // 'Basic ' + btoa(username + ':' + password)

  // set the basicAuth on refresh from localStorage if it exists
  useEffect(() => {
    const getFromLocalStorage: () => string | null = () => {
      return localStorage.getItem('basicAuth')
    }

    const basicAuth = getFromLocalStorage()

    // If the basicAuth exists, set it and redirect to /time
    if (basicAuth) {
      setBasicAuth(basicAuth)
      if (pathname === '/') redirect('/time')
    } else if (pathname !== '/') redirect('/')

    // Cleanup: Clear the localStorage on unmount
    return () => {
      localStorage.removeItem('basicAuth')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Save the basicAuth to localStorage if it changes
  useEffect(() => {
    const saveToLocalStorage: () => void = () => {
      localStorage.setItem('basicAuth', basicAuth)
    }

    saveToLocalStorage()

    // Cleanup: Clear the localStorage on unmount
    return () => {
      localStorage.removeItem('basicAuth')
    }
  }, [basicAuth])

  const logout = () => {
    localStorage.removeItem('basicAuth')
    redirect('/')
  }

  return (
    <LoginContext.Provider
      value={{
        basicAuth,
        setBasicAuth,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider }
