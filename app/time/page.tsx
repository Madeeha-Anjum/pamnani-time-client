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
      <form className='flex-1 px-8 pt-6 pb-8 mb-4'>
        <div className='max-w-2xl mx-auto mb-6 text-left'>
          <Label htmlFor='comment'>Comment</Label>
          <Input id='comment' placeholder='I worked...' />
        </div>
        <div className='mx-auto text-left max-w-fit'>
          <div>
            Clocked in at <span className='font-bold'>9:00 AM</span>
          </div>
          <Button color='danger' size='lg' type='submit'>
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
      <main className='pt-20 text-center md:pt-10 space-y-9'>
        {is_clocked_in ? <ClockIn /> : <ClockOut />}
      </main>
    </>
  )
}
export default Page
