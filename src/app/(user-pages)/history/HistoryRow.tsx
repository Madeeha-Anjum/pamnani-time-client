"use client";
import HistoryRecord from "@/models/HistoryRecord";
import dayjs from "dayjs";
import React from "react";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const defaultTimezone = "America/Edmonton";

interface HistoryRowProps {
  historyRecord: HistoryRecord;
}

const HistoryRow: React.FC<HistoryRowProps> = ({ historyRecord }) => {
  const dateString = dayjs(historyRecord.startDatetime)
    .tz(defaultTimezone)
    .format("MMM DD, YYYY");

  const startTimeString = dayjs(historyRecord.startDatetime)
    .tz(defaultTimezone)
    .format("hh:mm A");

  const endTimeString = historyRecord.endDatetime
    ? dayjs(historyRecord.endDatetime).tz(defaultTimezone).format("hh:mm A")
    : "";

  const totalTimeString = historyRecord.totalTime
    ? `${historyRecord.totalTime} HRS`
    : "-";

  const statusString = historyRecord.status;

  const commentsString = historyRecord.comments;

  return (
    <>
      <div>
        <div>
          <div className="flex justify-between">
            <div className="font-bold">{dateString}</div>
            <div className="font-bold">{totalTimeString}</div>
          </div>
          <div className="flex justify-between">
            <div>
              {startTimeString} {endTimeString ? `- ${endTimeString}` : ""}
            </div>
            <div>{statusString}</div>
          </div>
        </div>
        {commentsString && (
          <div className="mt-3">
            <div className="font-bold">Comments</div>
            <div>{commentsString}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default HistoryRow;
