import { axiosInstance, EndPoint } from './config'
import Username from './models/Username'
import TimeeyError from './models/TimeeyError'
import { AxiosResponse } from 'axios'
import UserCredentials from './models/UserCredentials'
import CreateClockInRecordRequest from './models/CreateClockInRecordRequest'
import CreateClockOutRecordRequest from './models/CreateClockOutRecordRequest'

const createAuthorizationHeader = (username: string, password: string) => {
  return 'Basic ' + btoa(username + ':' + password)
}

class TimeeyApi {
  static setUserCredentials = (userCredentials: UserCredentials) => {
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

  static verifyUserCredentials = async (
    userCredentials: UserCredentials
  ): Promise<AxiosResponse<void>> => {
    TimeeyApi.setUserCredentials(userCredentials)
    return axiosInstance.post(EndPoint.VERIFY_CREDENTIALS)
  }

  /**
   *  Clock in
   * @param   {string}  startDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @return {[type]}
   */
  static createClockInRecord = async (
    clockInRequest: CreateClockInRecordRequest
  ): Promise<AxiosResponse<HistoryRecord>> => {
    return axiosInstance.post(
      EndPoint.CREATE_USER_CLOCK_IN_RECORD,
      clockInRequest
    )
  }

  /**
   *  Clock out
   * @param   {string}   endDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @param   {string}   totalTime   [ Format HH:mm ex: 01:30 ]
   * @return {[type]}
   */
  static createClockOutRecord = async (
    clockOutRequest: CreateClockOutRecordRequest
  ): Promise<AxiosResponse<HistoryRecord>> => {
    return axiosInstance.post(
      EndPoint.CREATE_USER_CLOCK_OUT_RECORD,
      clockOutRequest
    )
  }

  static getUserHistory = async (): Promise<AxiosResponse<HistoryRecord[]>> => {
    return axiosInstance.get(EndPoint.USER_HISTORY)
  }
}

export default TimeeyApi
