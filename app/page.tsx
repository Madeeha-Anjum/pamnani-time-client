'use client'
import React, { useContext } from 'react'
import { redirect } from 'next/navigation'
import { ApiContext } from '@/store/apiContext'

const Home: React.FC = () => {
  const { isLoggedIn } = useContext(ApiContext)

  if (isLoggedIn) {
    return redirect('/time')
  } else {
    return redirect('/login')
  }
}
export default Home
