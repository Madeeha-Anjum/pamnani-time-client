'use client'
import ClockIn from '@/components/Time/ClockIn'
import ClockOut from '@/components/Time/ClockOut'
import Container from '@/components/ui/Container'
import { ApiContext } from '@/store/apiContext'
import { useContext, useEffect, useState } from 'react'

const Page: React.FC = () => {
  const apiCtx = useContext(ApiContext)
  const [latestClockInRecord, setLatestClockInRecord] = useState<
    HistoryRecord | undefined
  >(undefined)

  useEffect(() => {
    apiCtx.getLatestClockInRecord().then((latestClockInRecord) => {
      setLatestClockInRecord(latestClockInRecord)
    })
  }, [apiCtx])

  return (
    <Container size='medium'>
      <main className='mb-24 text-center space-y-9'>
        {latestClockInRecord ? (
          <ClockOut startDatetime={latestClockInRecord.startDatetime} />
        ) : (
          <ClockIn />
        )}
      </main>
    </Container>
  )
}

export default Page
