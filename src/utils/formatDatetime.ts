import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const defaultTimezone = "America/Edmonton";

const formatDatetime = {
  formatDate: (datetimeString: string): string => {
    return dayjs(datetimeString).tz(defaultTimezone).format("MMM DD, YYYY");
  },

  formatTime: (datetimeString: string): string => {
    return dayjs(datetimeString).tz(defaultTimezone).format("hh:mm:ss A");
  },
};

export default formatDatetime;
