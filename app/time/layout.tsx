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
    <section>
      <div className='flex items-end justify-between'>
        <Icon.Logo className='inline-block w-16 h-16 t text-sec opacity-60' />
        <Button color='secondary' size='sm'>
          Logout
        </Button>
      </div>
      <main className='pt-10 sm:px-10'>
        <TimeNavbar />
        {props.children}
      </main>
    </section>
  )
}

export default TimeDashboardLayout
