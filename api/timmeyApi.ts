import { axiosInstance, EndPoint } from './config'
import UserName from './models/userName'
import TimmyError from './models/Error'

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
  static setUserCredentials = (username: string, password: string) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Basic ${btoa(
      username + ':' + password
    )}`

    console.log(axiosInstance.defaults.headers)
  }

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
        console.log('Setting user credentails on server?')
        TimmeyApi.setUserCredentials(username, password)
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
  static createCockInRecord = async (
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
  static createClockOutRecord = async (
    endDateTime: String,
    totalTime: String
  ): Promise<{ success: boolean }> => {
    return axiosInstance.post(EndPoint.VERIFY_CREDENTIALS, {
      endDatetime: endDateTime,
      totalTime: totalTime,
    })
  }

  static getUserHistory = async (): Promise<any> => {
    console.log(
      'Authortization:',
      axiosInstance.defaults.headers.common['Authorization']
    )
    return axiosInstance.get(EndPoint.HISTORY)
  }
}

export default TimmeyApi
