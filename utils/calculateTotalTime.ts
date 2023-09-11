import dayjs, { type Dayjs } from 'dayjs'
import duration, { type Duration } from 'dayjs/plugin/duration'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(duration)
dayjs.extend(utc)
dayjs.extend(timezone)

const defaultTimezone = 'America/Edmonton'

function calculateTotalTime(
  startDatetimeString: string,
  endDatetimeString: string
): string {
  const startDatetime = dayjs(startDatetimeString).tz(defaultTimezone)
  const endDatetime = dayjs(endDatetimeString).tz(defaultTimezone)

  const duration = calculateRoundedDuration(startDatetime, endDatetime)
  const totalTime = duration.format('HH:mm')

  return totalTime
}

function calculateRoundedDuration(
  startDatetime: Dayjs,
  endDatetime: Dayjs
): Duration {
  const duration = dayjs.duration(endDatetime.diff(startDatetime))
  return roundDurationToNearestMinutes(duration, 15)
}

function roundDurationToNearestMinutes(
  duration: Duration,
  roundMinutes: number
): Duration {
  const minutes = duration.minutes()

  const remainder = minutes % roundMinutes

  if (remainder >= Math.floor(roundMinutes / 2)) {
    return duration.add(roundMinutes - remainder, 'minutes')
  } else {
    return duration.subtract(remainder, 'minutes')
  }
}

export default calculateTotalTime
