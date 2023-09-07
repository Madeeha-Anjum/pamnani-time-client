interface TimmyError extends Error {
  type: string
  message: string
  code: number
}
export default TimmyError
