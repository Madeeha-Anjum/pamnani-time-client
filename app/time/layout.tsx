import Container from '@/components/ui/Container'
import Navbar from '@/components/Navbar'
import Icon from '@/components/icon/Icon'
import Click from '@/components/ui/Click'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeey dashboard',
  description: 'Time collection app',
}

interface TimeDashboardLayoutInterface {
  children: React.ReactNode
  team: React.ReactNode
}

const TimeDashboardLayout: React.FC<TimeDashboardLayoutInterface> = (props) => {
  return (
    <div className='flex flex-col h-full'>
      <Container>
        <div className='flex items-center justify-between'>
          <Icon.Logo className='inline-block w-16 h-16 text-sec' />
          <Click color='secondary' size='sm' href='/'>
            Logout
          </Click>
        </div>
        <Navbar />
      </Container>

      <div className='flex-grow'>
        <div className='py-24'>{props.children}</div>
      </div>
    </div>
  )
}

export default TimeDashboardLayout
