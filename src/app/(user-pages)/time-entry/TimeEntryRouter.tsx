"use client";
import LoadingBanana from "@/components/LoadingBanana";
import useTimeeyQuery from "@/hooks/useTimeeyQuery";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const TimeEntryRouter: React.FC = () => {
  const { userHistoryQuery } = useTimeeyQuery();

  useEffect(() => {
    if (userHistoryQuery.isSuccess) {
      const historyRecords = userHistoryQuery.data?.data;

      const clockInRecord = historyRecords.clockInRecord;

      if (clockInRecord) {
        redirect("/time-entry/clock-out");
      } else {
        redirect("/time-entry/clock-in");
      }
    }
  }, [userHistoryQuery]);

  if (userHistoryQuery.isError) {
    return (
      <>
        <div>Error</div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="w-24">
          <LoadingBanana />
        </div>
      </div>
    </>
  );
};

export default TimeEntryRouter;
