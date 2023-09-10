'use client'
import DigitalClock from './DigitalClock'
import Click from '../ui/Click'
import Label from '../ui/Label'
import Input from '../ui/Input'
import { useContext, useEffect, useState } from 'react'
import { ApiContext } from '@/store/apiContext'
import { separateDateAndTime } from '@/utils/datetimeConverter'
import calculateTotalTime from '@/utils/calculateTotalTime'
import dayjs from 'dayjs'

const ClockOut: React.FC<{ startDatetime: string }> = ({ startDatetime }) => {
  const submitHandler = () => {}

  const [timeElapsed, setTimeElapsed] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTotalTime(startDatetime, dayjs().toISOString()))
    }, 1000)
    return () => clearInterval(interval)
  }, [startDatetime])

  return (
    <>
      <div>
        <h2 className='p-2 text-sm'>Time Elapsed (Rounded)</h2>
        {timeElapsed}
      </div>
      <div className='flex-1 max-w-2xl p-8 mx-auto mb-6 space-y-6'>
        <div className=''>
          <Label htmlFor='comment'>Comment</Label>
          <Input id='comment' placeholder='I worked...' error={null} />
        </div>
        <div className='max-w-lg mx-auto'>
          <div className='text-left'>
            Clocked in at{' '}
            <span className='font-bold'>
              {separateDateAndTime(startDatetime).time}
            </span>
          </div>
          <Click color='danger' size='lg' type='submit' className='w-full'>
            Clock Out
          </Click>
        </div>
      </div>
    </>
  )
}

export default ClockOut
