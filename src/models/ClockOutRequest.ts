export default interface ClockOutRequest {
  id: string;
  endDatetime: string;
  totalTime: string;
  comments?: string;
}
