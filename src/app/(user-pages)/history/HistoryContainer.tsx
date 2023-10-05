"use client";
import useTimeeyQuery from "@/hooks/useTimeeyQuery";
import UserCredentials from "@/models/UserCredentials";
import { getCookie } from "cookies-next";
import React from "react";
import HistoryRow from "./HistoryRow";
import LoadingBanana from "@/components/LoadingBanana";

const HistoryContainer: React.FC = () => {
  const { userHistoryQuery } = useTimeeyQuery();

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
  } else if (userHistoryQuery.isError) {
    return <div>Error</div>;
  } else if (userHistoryQuery.isSuccess) {
    return (
      <>
        <div className="max-w-md mx-auto border px-5">
          {userHistoryQuery?.data?.data.userTimesheet.map((row, index) => (
            <div
              key={index}
              className="py-5  border-b last:border-b-0 border-b-slate-200"
            >
              <HistoryRow historyRecord={row} />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default HistoryContainer;
