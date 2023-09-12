'use client'
import Click from '../ui/Click'
import Label from '../ui/Label'
import Input from '../ui/Input'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { separateDateAndTime } from '@/utils/datetimeConverter'
import calculateTotalTime from '@/utils/calculateTotalTime'
import dayjs from 'dayjs'
import { ApiContext } from '@/store/apiContext'

interface ClockOutInterface {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
  startDatetime: string
}

const ClockOut: React.FC<ClockOutInterface> = ({
  startDatetime,
  setRefresh,
}) => {
  const apiCtx = useContext(ApiContext)
  const [comment, setComment] = useState('')
  const [timeElapsed, setTimeElapsed] = useState('')

  const submitHandler = async () => {
    await apiCtx.createClockOutRecord({
      endDatetime: new Date().toISOString(),
      totalTime: timeElapsed,
      comment,
    })
    setRefresh((refresh) => !refresh)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(
        calculateTotalTime(startDatetime, new Date().toISOString())
      )
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
          <Input
            id='comment'
            placeholder='I Worked...'
            error={null}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setComment(e.target.value)
            }}
          />
        </div>
        <div className='max-w-lg mx-auto'>
          <div className='text-left'>
            Clocked in at{' '}
            <span className='font-bold'>
              {separateDateAndTime(startDatetime).time}
            </span>
          </div>
          <Click
            color='danger'
            size='lg'
            type='submit'
            className='w-full'
            onClick={submitHandler}
          >
            Clock Out
          </Click>
        </div>
      </div>
    </>
  )
}

export default ClockOut
