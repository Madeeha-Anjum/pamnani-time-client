import ClockIn from '@/components/Time/ClockIn'
import ClockOut from '@/components/Time/ClockOut'
import Container from '@/components/ui/Container'

const Page: React.FC = () => {
  const is_clocked_in = true
  return (
    <Container size='medium'>
      <main className='mb-24 text-center space-y-9'>
        {is_clocked_in ? <ClockIn /> : <ClockOut />}
      </main>
    </Container>
  )
}

export default Page
