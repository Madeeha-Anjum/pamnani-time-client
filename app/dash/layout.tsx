import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Timeey dashboard',
  description: 'Time collection app',
}

interface DashboardLayoutInterface {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutInterface> = ({ children }) => {
  return <section className={inter.className}>{children}</section>
}
export default DashboardLayout
