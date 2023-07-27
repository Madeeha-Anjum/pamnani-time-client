import React from 'react'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      Hello World
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
export default Home
