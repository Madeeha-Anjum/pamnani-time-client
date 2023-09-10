import { axiosInstance, EndPoint } from './config'
import Username from './models/Username'
import TimeeyError from './models/TimeeyError'

const createAuthorizationHeader = (username: string, password: string) => {
  return 'Basic ' + btoa(username + ':' + password)
}

class TimeeyApi {
  static setUserCredentials = (username: string, password: string) => {
    axiosInstance.defaults.headers.common['Authorization'] =
      createAuthorizationHeader(username, password)

    console.log(axiosInstance.defaults.headers)
  }

  static getAllUserNames = async (): Promise<Username[]> => {
    return axiosInstance.get(EndPoint.USERNAMES)
  }

  static verifyUserCredentials = async (
    username: string,
    password: string
  ): Promise<void> => {
    TimeeyApi.setUserCredentials(username, password)
    return axiosInstance.post(EndPoint.VERIFY_CREDENTIALS)
  }

  /**
   *  Clock in
   * @param   {string}  startDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @return {[type]}
   */
  static createCockInRecord = async (
    startDatetime: string
  ): Promise<{ success: boolean }> => {
    return axiosInstance.post(EndPoint.CREATE_USER_CLOCK_IN_RECORD, {
      startDatetime,
    })
  }

  /**
   *  Clock out
   * @param   {string}   endDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @param   {string}   totalTime   [ Format HH:mm ex: 01:30 ]
   * @return {[type]}
   */
  static createClockOutRecord = async (
    endDatetime: String,
    totalTime: String
  ): Promise<{ success: boolean }> => {
    return axiosInstance.post(EndPoint.CREATE_USER_CLOCK_OUT_RECORD, {
      endDatetime,
      totalTime,
    })
  }

  static getUserHistory = async (): Promise<any> => {
    return axiosInstance.get(EndPoint.USER_HISTORY)
  }
}

export default TimeeyApi
