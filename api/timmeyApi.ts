import { axiosInstance, EndPoint } from './config'
import Username from './models/Username'
import TimeeyError from './models/TimeeyError'
import { AxiosResponse } from 'axios'

const createAuthorizationHeader = (username: string, password: string) => {
  return 'Basic ' + btoa(username + ':' + password)
}

class TimeeyApi {
  static setUserCredentials = (userCredentials: {
    username: string
    password: string
  }) => {
    axiosInstance.defaults.headers.common['Authorization'] =
      createAuthorizationHeader(
        userCredentials.username,
        userCredentials.password
      )

    console.log(axiosInstance.defaults.headers)
  }

  static getAllUsernames = async (): Promise<AxiosResponse<Username[]>> => {
    return axiosInstance.get(EndPoint.USERNAMES)
  }

  static verifyUserCredentials = async (userCredentials: {
    username: string
    password: string
  }): Promise<AxiosResponse<void>> => {
    TimeeyApi.setUserCredentials(userCredentials)
    return axiosInstance.post(EndPoint.VERIFY_CREDENTIALS)
  }

  /**
   *  Clock in
   * @param   {string}  startDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @return {[type]}
   */
  static createClockInRecord = async (clockInInfo: {
    startDatetime: string
  }): Promise<AxiosResponse<HistoryRecord>> => {
    return axiosInstance.post(EndPoint.CREATE_USER_CLOCK_IN_RECORD, clockInInfo)
  }

  /**
   *  Clock out
   * @param   {string}   endDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @param   {string}   totalTime   [ Format HH:mm ex: 01:30 ]
   * @return {[type]}
   */
  static createClockOutRecord = async (clockOutInfo: {
    endDatetime: String
    totalTime: String
  }): Promise<AxiosResponse<HistoryRecord>> => {
    return axiosInstance.post(
      EndPoint.CREATE_USER_CLOCK_OUT_RECORD,
      clockOutInfo
    )
  }

  static getUserHistory = async (): Promise<AxiosResponse<HistoryRecord[]>> => {
    return axiosInstance.get(EndPoint.USER_HISTORY)
  }
}

export default TimeeyApi
