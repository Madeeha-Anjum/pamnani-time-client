import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Mode from '@/components/Mode'

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
      <html lang='en' className='dark:bg-black'>
        <body className={lora.className}>
          <div className='flex flex-col w-screen h-screen dark:bg-slate-950/95 dark:text-white'>
            <Mode />
            {children}
            <div className='self-center mt-auto dark:text-white '>
              Copyright 2023
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
export default RootLayout
