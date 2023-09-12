import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Mode from '@/components/Mode'
import React from 'react'
import classnames from 'classnames'
import Container from '@/components/ui/Container'
import { ApiProvider } from '@/store/apiContext'
import { Toaster } from 'react-hot-toast'

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
    <html lang='en'>
      <ApiProvider>
        <body
          className={classnames(
            lora.className,
            'w-screen dark:bg-slate-950/95 dark:text-white overflow-y-auto overflow-x-hidden'
          )}
        >
          <div className='flex flex-col h-screen'>
            <header>
              <Container>
                <div className='text-right'>
                  <Mode />
                </div>
              </Container>
            </header>

            <main className='flex-grow'>{children}</main>

            <footer className='self-center dark:text-white'>
              <p className='text-xs text-center text-gray-500'>
                &copy; {new Date().getFullYear()} Timeey
              </p>
            </footer>
          </div>
          <Toaster position='bottom-right' />
        </body>
      </ApiProvider>
    </html>
  )
}
export default RootLayout
