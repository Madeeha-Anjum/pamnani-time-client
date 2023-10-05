"use client";
import formatEdmontonTime from "@/utils/formatEdmontonTime";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [currTime, setCurrTime] = useState("");

  useEffect(() => {
    setCurrTime(formatEdmontonTime(dayjs().toISOString()));
    const interval = setInterval(() => {
      setCurrTime(formatEdmontonTime(dayjs().toISOString()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{currTime}</>;
};

export default Clock;
