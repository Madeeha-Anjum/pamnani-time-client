import calculateTotalTime from "@/utils/calculateTotalTime";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

interface DurationClockProps {
  startDatetime: string;
}

const DurationClock: React.FC<DurationClockProps> = (props) => {
  const [currTime, setCurrTime] = useState("");

  const totalElapsedTime = calculateTotalTime(props.startDatetime, currTime);

  useEffect(() => {
    setCurrTime(dayjs().toISOString());

    const interval = setInterval(() => {
      setCurrTime(dayjs().toISOString());
    }, 1000);

    return () => clearInterval(interval);
  }, [props.startDatetime]);

  return <>{totalElapsedTime} HRS</>;
};

export default DurationClock;
