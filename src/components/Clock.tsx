"use client";
import formatDatetime from "@/utils/formatDatetime";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [currTime, setCurrTime] = useState("");

  useEffect(() => {
    setCurrTime(formatDatetime.formatTime(dayjs().toISOString()));
    const interval = setInterval(() => {
      setCurrTime(formatDatetime.formatTime(dayjs().toISOString()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{currTime}</>;
};

export default Clock;
