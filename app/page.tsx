import React from 'react'
import Icon from '@/components/icon/Icon'
import LoginForm from '@/components/LoginForm'
import Container from '@/components/Container'

const Home: React.FC = () => {
  return (
    <main className='flex items-center h-full'>
      <div className='w-full mb-24 sm:mb-48'>
        <div className='text-center'>
          <Icon.Logo className='inline-block w-24 h-24 text-sec' />
          <h1 className='text-4xl font-bold text-sec'>Pamnani</h1>
          <h2 className='text-lg'>Login</h2>
        </div>
        <Container size='medium'>
          <LoginForm />
        </Container>
      </div>
    </main>
  )
}
export default Home
