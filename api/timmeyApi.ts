import { axiosInstance, EndPoint } from './config'
import UserName from './models/userName'
import TimmyError from './models/Error'

const setHeaders = (username: string, password: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Basic ${btoa(
    username + ':' + password
  )}`
}

const getErrorFromResponse = (error: any): Array<TimmyError> => {
  return (
    error?.response?.data?.errors ?? [
      {
        type: 'Unknown Error',
        message: 'Something went wrong. Please try again.',
        code: 0,
      },
    ]
  )
}

class TimmeyApi {
  static getAllUserNames = async (): Promise<UserName> => {
    return axiosInstance.get(EndPoint.USERNAMES).then((response) => {
      return response.data as UserName
    })
  }

  static verifyUserCredentials = async (
    username: string,
    password: string
  ): Promise<{ success: boolean }> => {
    return axiosInstance
      .post(
        EndPoint.VERIFY_CREDENTIALS,
        {},
        {
          headers: {
            Authorization: 'Basic ' + btoa(username + ':' + password),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setHeaders(username, password)
        }
        return { success: true }
      })
      .catch((error) => {
        throw getErrorFromResponse(error)
      })
  }

  /**
   *  Clock in
   * @param   {string}  startDatetime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @return {[type]}
   */
  static clockIn = async (
    startDatetime: string
  ): Promise<{ success: boolean }> => {
    return axiosInstance.post(EndPoint.VERIFY_CREDENTIALS, {
      startDatetime: startDatetime,
    })
  }

  /**
   *  Clock out
   * @param   {string}   endDateTime [ Format ISO 8601 ex: 2023-07-19T15:00:35-06:00 or 2023-07-19T15:00:35Z ]
   * @param   {string}   totalTime   [ Format HH:mm ex: 01:30 ]
   * @return {[type]}
   */
  static clockOut = async (
    endDateTime: String,
    totalTime: String
  ): Promise<{ success: boolean }> => {
    return axiosInstance.post(EndPoint.VERIFY_CREDENTIALS, {
      endDatetime: endDateTime,
      totalTime: totalTime,
    })
  }

  static getHistory = async (): Promise<{ success: boolean }> => {
    return axiosInstance.get(EndPoint.HISTORY)
  }
}

export default TimmeyApi
