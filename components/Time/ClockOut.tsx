'use client'
import DigitalClock from './DigitalClock'
import Click from '../ui/Click'
import Label from '../ui/Label'
import Input from '../ui/Input'

const ClockOut: React.FC = () => {
  const submitHandler = (e: any) => {
    e.preventDefault()
  }

  return (
    <>
      <div>
        <h2 className='p-2 text-sm'>Current Time</h2>
        <DigitalClock />
      </div>
      <form className='flex-1 max-w-2xl p-8 mx-auto mb-6 space-y-6'>
        <div className=''>
          <Label htmlFor='comment'>Comment</Label>
          <Input id='comment' placeholder='I worked...' error={null} />
        </div>
        <div className='max-w-lg mx-auto'>
          <div className='text-left'>
            Clocked in at <span className='font-bold'>9:00 AM</span>
          </div>
          <Click color='danger' size='lg' type='submit' className='w-full'>
            Clock Out
          </Click>
        </div>
      </form>
    </>
  )
}

export default ClockOut
