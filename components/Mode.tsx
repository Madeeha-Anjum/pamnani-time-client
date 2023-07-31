'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import Switch from './ui/Switch'

const Mode: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false)

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme === 'true' ? true : false)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', `${theme}`) // save theme to local storage
    document.documentElement.classList.remove('dark')
    if (theme) document.documentElement.classList.add('dark')
  }, [theme])

  const toggle = () => {
    setTheme(!theme)
  }

  return (
    <>
      <div className='absolute top-5 right-5'>
        <Switch
          className='grid-cols-[auto,1fr] gap-2'
          checked={theme}
          onChange={toggle}
        >
          Mode
        </Switch>
      </div>
    </>
  )
}
export default Mode
