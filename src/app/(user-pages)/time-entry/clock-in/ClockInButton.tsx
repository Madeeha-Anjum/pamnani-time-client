"use client";
import Button from "@/components/Button";
import useTimeeyQuery from "@/hooks/useTimeeyQuery";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React from "react";

const ClockInButton: React.FC = () => {
  const { mutations } = useTimeeyQuery();
  const router = useRouter();

  const onClockInButtonClock = async () => {
    try {
      await mutations.createClockInRecord.mutateAsync({
        startDatetime: dayjs().toISOString(),
      });
    } finally {
      router.push("/time-entry");
    }
  };

  return (
    <>
      <Button onClick={onClockInButtonClock}>Clock In</Button>
    </>
  );
};

export default ClockInButton;
