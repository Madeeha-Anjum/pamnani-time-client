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
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    apiCtx.getLatestClockInRecord().then((latestClockInRecord) => {
      setLatestClockInRecord(latestClockInRecord)
    })
  }, [refresh]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container size='medium'>
      <main className='mb-24 text-center space-y-9 text-sec'>
        {latestClockInRecord ? (
          <ClockOut
            setRefresh={setRefresh}
            startDatetime={latestClockInRecord.startDatetime}
          />
        ) : (
          <ClockIn setRefresh={setRefresh} />
        )}
      </main>
    </Container>
  )
}

export default Page
