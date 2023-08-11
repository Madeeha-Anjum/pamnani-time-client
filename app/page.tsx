import React from 'react'
import Icon from '@/components/icon/Icon'
import LoginForm from '@/components/LoginForm'

const Home: React.FC = () => {
  return (
    <main className='px-10 pt-10 space-y-2 md:space-y-28 last:space-y-0'>
      <div className='text-center'>
        <Icon.Logo className='inline-block w-24 h-24 text-sec' />
        <h1 className='text-4xl font-bold text-center text-sec'>Pamnani</h1>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl'>Login</h2>
        <LoginForm />
      </div>
    </main>
  )
}
export default Home
