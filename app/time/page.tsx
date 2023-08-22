import Container from '@/components/Container'
import DigitalClock from '@/components/Time/DigitalClock'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
const is_clocked_in = false

const ClockIn: React.FC = () => {
  return (
    <>
      <div>
        <h2 className='p-2 text-sm'>Current Time</h2>
        <DigitalClock />
      </div>
      <Button color='primary' size='lg'>
        Clock In
      </Button>
    </>
  )
}
const ClockOut: React.FC = () => {
  return (
    <>
      <div>
        <h2 className='p-2 text-sm'>Current Time</h2>
        <DigitalClock />
      </div>
      <form className='flex-1 max-w-2xl p-8 mx-auto mb-6 space-y-6'>
        <div className=''>
          <Label htmlFor='comment'>Comment</Label>
          <Input id='comment' placeholder='I worked...' />
        </div>
        <div className='max-w-lg mx-auto'>
          <div className='text-left'>
            Clocked in at <span className='font-bold'>9:00 AM</span>
          </div>
          <Button color='danger' size='lg' type='submit' className='w-full'>
            Clock Out
          </Button>
        </div>
      </form>
    </>
  )
}

const Page: React.FC = () => {
  return (
    <>
      <Container size='medium'>
        <main className='mb-24 text-center space-y-9'>
          {is_clocked_in ? <ClockIn /> : <ClockOut />}
        </main>
      </Container>
    </>
  )
}
export default Page
