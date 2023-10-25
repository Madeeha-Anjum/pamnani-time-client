"use client";
import Button from "@/components/Button";
import LoadingBanana from "@/components/LoadingBanana";
import TextInput from "@/components/TextInput";
import useTimeeyQuery from "@/hooks/useTimeeyQuery";
import HistoryRecord from "@/models/HistoryRecord";
import calculateTotalTime from "@/utils/calculateTotalTime";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Clock from "@/components/Clock";
import DurationClock from "@/components/DurationClock";
import formatDatetime from "@/utils/formatDatetime";

interface UserInput {
  comments: string;
}

const ClockOutForm: React.FC = () => {
  const { userHistoryQuery, mutations } = useTimeeyQuery();
  const router = useRouter();

  const [clockInRecord, setClockInRecord] = useState<HistoryRecord | null>(
    null
  );

  const [userInput, setUserInput] = useState<UserInput>({
    comments: "",
  });

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

  const onClockOutButtonClick = async () => {
    try {
      await mutations.createClockOutRecord.mutateAsync({
        id: clockInRecord.id,
        endDatetime: dayjs().toISOString(),
        totalTime: calculateTotalTime(
          clockInRecord.startDatetime,
          dayjs().toISOString()
        ),
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
        <DurationClock startDatetime={clockInRecord.startDatetime} />
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
          Clocked In At:{" "}
          <span className="font-bold">
            {formatDatetime.formatTime(clockInRecord.startDatetime)}
          </span>
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
