import Container from '@/components/Container'
import TimeNavbar from '@/components/Time/TimeNavbar'
import Icon from '@/components/icon/Icon'
import Button from '@/components/ui/Button'
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
    <>
      <div className='flex flex-col h-full'>
        <Container>
          <div className='flex items-end justify-between'>
            <Icon.Logo className='inline-block w-16 h-16 text-sec opacity-60' />
            <Button color='secondary' size='sm' className='self-center'>
              Logout
            </Button>
          </div>
          <TimeNavbar />
        </Container>
        <div className='items-center flex-grow'>
          <div className='flex items-center w-full h-full'>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeDashboardLayout
