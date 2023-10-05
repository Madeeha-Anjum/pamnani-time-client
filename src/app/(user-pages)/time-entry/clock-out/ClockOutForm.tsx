"use client";
import Button from "@/components/Button";
import LoadingBanana from "@/components/LoadingBanana";
import TextInput from "@/components/TextInput";
import useTimeeyQuery from "@/hooks/useTimeeyQuery";
import HistoryRecord from "@/models/HistoryRecord";
import calculateTotalTime from "@/utils/calculateTotalTime";
import findLatestClockInRecord from "@/utils/findLatestClockInRecord";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRouter } from "next/navigation";
import Clock from "@/components/Clock";
import formatEdmontonTime from "@/utils/formatEdmontonTime";

dayjs.extend(utc);
dayjs.extend(timezone);

const defaultTimezone = "America/Edmonton";

interface UserInput {
  comments: string;
}

const ClockOutForm: React.FC = () => {
  const { userHistoryQuery, mutations } = useTimeeyQuery();
  const [clockInRecord, setClockInRecord] = useState<HistoryRecord | null>(
    null
  );
  const [currTime, setCurrTime] = useState(dayjs().toISOString());
  const [userInput, setUserInput] = useState<UserInput>({
    comments: "",
  });
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(dayjs().toISOString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (userHistoryQuery.isSuccess) {
      const historyRecords = userHistoryQuery.data?.data;

      const latestClockInRecord = historyRecords.clockInRecord;

      if (latestClockInRecord) {
        setClockInRecord(latestClockInRecord);
      } else {
        router.push("/time-entry");
      }
    }
  }, [userHistoryQuery, router]);

  if (userHistoryQuery.isLoading) {
    return (
      <>
        <div className="flex items-center justify-center h-full">
          <div className="w-24">
            <LoadingBanana />
          </div>
        </div>
      </>
    );
  }

  if (userHistoryQuery.isError) {
    return (
      <>
        <div>Error</div>
      </>
    );
  }

  if (!clockInRecord) {
    return (
      <>
        <div>No Clock In Record</div>
      </>
    );
  }

  const totalElapsedTime = calculateTotalTime(
    clockInRecord.startDatetime,
    currTime
  );

  const startTimeString = formatEdmontonTime(clockInRecord.startDatetime);

  const onClockOutButtonClick = async () => {
    try {
      await mutations.createClockOutRecord.mutateAsync({
        id: clockInRecord.id,
        endDatetime: currTime,
        totalTime: totalElapsedTime,
        comments: userInput.comments,
      });
      router.push("/history");
    } catch (error) {
      router.push("/time-entry");
    }
  };

  return (
    <>
      <div className="text-center">Time Elapsed (Rounded)</div>
      <div className="mt-1 text-2xl font-bold text-center text-primary">
        {totalElapsedTime} HRS
      </div>

      <div className="mt-8">
        <TextInput
          id="comment"
          name="comment"
          label="Comment"
          value={userInput.comments}
          onChange={(e) => {
            setUserInput({
              ...userInput,
              comments: e.target.value,
            });
          }}
        />
      </div>

      <div className="mt-8">
        <div className="mb-1">
          Clocked In At: <span className="font-bold">{startTimeString}</span>
        </div>
        <div className="mb-1">
          Current Time:{" "}
          <span className="font-bold">
            <Clock />
          </span>
        </div>
        <Button onClick={onClockOutButtonClick}>Clock Out</Button>
      </div>
    </>
  );
};

export default ClockOutForm;
