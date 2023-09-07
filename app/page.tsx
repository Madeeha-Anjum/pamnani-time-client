import React, { cache } from 'react'
import Icon from '@/components/icon/Icon'
import LoginForm from '@/components/LoginForm'
import Container from '@/components/ui/Container'
import TimmeyApi from '@/api/timmeyApi'
import UserName from '@/api/models/userName'

/**
 * Preload data for the page
 * Cache until the server is restarted
 * @returns {Promise<UserName>}
 */
const preload = cache(async (): Promise<UserName> => {
  return TimmeyApi.getAllUserNames()
})

const Home: React.FC = async () => {
  const userNames = await preload()

  return (
    <main className='flex items-center h-full'>
      <div className='w-full mb-24 sm:mb-48'>
        <div className='text-center'>
          <Icon.Logo className='inline-block w-24 h-24 text-sec' />
          <h1 className='text-4xl font-bold text-sec'>Pamnani</h1>
          <h2 className='text-lg'>Login</h2>
        </div>
        <Container size='medium'>
          <LoginForm userNames={userNames} />
        </Container>
      </div>
    </main>
  )
}

export default Home
