import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const defaultTimezone = "America/Edmonton";

function formatEdmontonTime(datetimeString: string): string {
  return dayjs(datetimeString).tz(defaultTimezone).format("hh:mm:ss A");
}

export default formatEdmontonTime;
