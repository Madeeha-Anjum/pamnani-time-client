import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Mode from '@/components/Mode'
import React from 'react'
import classnames from 'classnames'
import Container from '@/components/ui/Container'
import { LoginProvider } from '@/store/loginContext'

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

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => (
  <>
    <html lang='en'>
      <body
        className={classnames(
          lora.className,
          'w-screen h-screen dark:bg-slate-950/95 dark:text-white overflow-y-auto overflow-x-hidden'
        )}
      >
        <div className='flex flex-col h-full'>
          <header>
            <Container>
              <Mode />
            </Container>
          </header>

          <main className='flex-grow'>
            <LoginProvider>{children}</LoginProvider>
          </main>

          <footer className='self-center dark:text-white'>
            <p className='text-xs text-center text-gray-500'>
              &copy; {new Date().getFullYear()} Timeey
            </p>
          </footer>
        </div>
      </body>
    </html>
  </>
)
export default RootLayout
