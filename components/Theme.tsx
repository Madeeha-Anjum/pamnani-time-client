'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import Switch from './ui/Switch'

interface ThemeInterface {
  children: React.ReactNode
}

const Theme: React.FC<ThemeInterface> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(false)

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (!localTheme) {
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
        setTheme(true) // set theme based on system preferences
    }
    localTheme && setTheme(localTheme === 'true' ? true : false)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', `${theme}`) // save theme to local storage
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggle = () => {
    setTheme(!theme)
  }

  return (
    <>
      <Switch checked={theme} onChange={toggle}>
        Theme Switch
      </Switch>
      {children}
    </>
  )
}
export default Theme
