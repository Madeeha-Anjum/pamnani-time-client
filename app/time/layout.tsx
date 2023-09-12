import Container from '@/components/ui/Container'
import Icon from '@/components/icon/Icon'
import type { Metadata } from 'next'
import Click from '@/components/ui/Click'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Timeey dashboard',
  description: 'Time collection app',
}

interface TimeDashboardLayoutInterface {
  children: React.ReactNode
}

const TimeDashboardLayout: React.FC<TimeDashboardLayoutInterface> = (props) => {
  return (
    <div className='flex flex-col h-full'>
      <Container>
        <div className='flex items-center justify-between'>
          <Icon.Logo className='inline-block w-16 h-16 text-sec' />
          <Click color='secondary' size='sm' href='logout'>
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
