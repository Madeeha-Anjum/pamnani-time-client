interface TimeeyError extends Error {
  type: string
  message: string
  code: number
}
export default TimeeyError
