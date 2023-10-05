import HistoryRecord from "@/models/HistoryRecord";

const findLatestClockInRecord = (historyRecords: HistoryRecord[]) => {
  return (
    historyRecords.find(
      (record) => record.endDatetime == null && record.totalTime == null
    ) ?? null
  );
};

export default findLatestClockInRecord;
