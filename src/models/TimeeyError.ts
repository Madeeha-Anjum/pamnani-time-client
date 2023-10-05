export default interface TimeeyError extends Error {
  type: string;
  message: string;
  code: number;
  data?: any;
}
