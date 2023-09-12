'use client'

import Container from '@/components/ui/Container'
import Icon from '@/components/icon/Icon'
import React, { cache, useContext, useEffect, useState } from 'react'
import TimeeyApi from '@/api/timeeyApi'
import { ApiContext } from '@/store/apiContext'
import { separateDateAndTime } from '@/utils/datetimeConverter'

const Page: React.FC = () => {
  const [userHistory, setUserHistory] = useState<HistoryRecord[]>([])
  const apiCtx = useContext(ApiContext)

  useEffect(() => {
    apiCtx.getUserHistory().then((res) => {
      setUserHistory(res)
    })
  }, [apiCtx])

  return (
    <Container>
      {userHistory.map((entry, index) => {
        return (
          <>
            <div
              className='p-4 border-b-2 last:border-b-0 border-b-black dark:border-b-white'
              key={index}
            >
              <div className='grid grid-cols-2 gap-y-4'>
                <p className='text-xl font-bold'>
                  {' '}
                  {separateDateAndTime(entry.startDatetime).date}
                </p>
                <p className='text-xl font-bold text-right'>
                  {entry.totalTime}
                </p>
                <div className='flex items-center px-2 space-x-2 '>
                  <p>
                    <Icon.Triangle className='w-5 rotate-90'></Icon.Triangle>
                  </p>
                  <div>
                    {separateDateAndTime(entry.startDatetime).time}{' '}
                    {entry.endDatetime &&
                      ` - ${separateDateAndTime(entry.endDatetime).time}`}
                  </div>
                </div>
                <p className='px-2 text-right'>{entry.status} </p>
              </div>

              <div>Comment </div>
              <div>{entry.comment} </div>
            </div>
          </>
        )
      })}
    </Container>
  )
}

export default Page
