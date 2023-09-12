'use client'
import Click from '@/components/ui/Click'
import { ApiContext } from '@/store/apiContext'
import React from 'react'

const Logout: React.FC = () => {
  const { logout } = React.useContext(ApiContext)

  React.useEffect(() => {
    logout()
  }, [logout])

  return (
    <main className='flex flex-col items-center justify-center w-full h-full py-24 '>
      <div>Thanks for using Timeey!</div>
      <Click className='mt-4' href='/'>
        Login again
      </Click>
    </main>
  )
}

export default Logout
