import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Theme from '../components/Theme'

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pamnani',
  description: 'Time collection app',
}

interface RootLayoutInterface {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => {
  return (
    <>
      <html lang='en'>
        <body className={lora.className}>
          <Theme>{children}</Theme>
          <div className='bg-background'></div>
        </body>
      </html>
    </>
  )
}
export default RootLayout
