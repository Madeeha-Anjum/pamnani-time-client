export default interface HistoryRecord {
  id: string;
  username: string;
  startDatetime: string;
  endDatetime?: string;
  totalTime?: string;
  status: string;
  comments?: string;
}
