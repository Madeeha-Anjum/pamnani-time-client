'use client'
import React, { useEffect } from 'react'

const DigitalClock = () => {
  const [time, setTime] = React.useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    console.log('Here is the time: ', time)
    return () => clearInterval(interval)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div className='text-4xl'>{time}</div>
}

export default DigitalClock
