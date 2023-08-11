import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Mode from '@/components/Mode'
import React from 'react'

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Timeey',
  description: 'Time collection app',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'Time collection app',
  icons: {
    icon: '/favicon.png',
  },
}

interface RootLayoutInterface {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <>
      <html lang='en'>
        <body className={lora.className}>
          <main className='w-screen h-screen dark:bg-slate-950/95 dark:text-white'>
            <section className='flex flex-col w-full h-full p-2 pb-0 mx-auto sm:pb-0 sm:p-4 max-w-7xl'>
              <Mode />
              {children}
              <div className='self-center mt-auto dark:text-white'>
                <p className='text-xs text-center text-gray-500'>
                  &copy; {new Date().getFullYear()} Timeey
                </p>
              </div>
            </section>
          </main>
        </body>
      </html>
    </>
  )
}
export default RootLayout
