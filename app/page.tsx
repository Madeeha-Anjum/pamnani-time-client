import React, { cache } from 'react'
import Icon from '@/components/icon/Icon'
import LoginForm from '@/components/LoginForm'
import Container from '@/components/ui/Container'
import TimeeyApi from '@/api/timmeyApi'
import Username from '@/api/models/Username'

/**
 * Preload data for the page
 * Cache until the server is restarted
 * @returns {Promise<UserName>}
 */
const preload = cache(async (): Promise<Username[]> => {
  return TimeeyApi.getAllUsernames().then((res) => res.data)
})

const Home: React.FC = async () => {
  const usernames = await preload()

  return (
    <main className='flex flex-col w-full h-full py-24'>
      <div className='text-center'>
        <Icon.Logo className='inline-block w-24 h-24 text-sec' />
        <h1 className='text-4xl font-bold text-sec'>Pamnani</h1>
        <h2 className='text-lg'>Login</h2>
      </div>
      <Container size='medium'>
        <LoginForm usernames={usernames} />
      </Container>
    </main>
  )
}

export default Home
