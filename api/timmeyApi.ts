import { cache } from 'react'
import { axiosInstance, endPoint } from './config'
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
  static getAllUserNames = cache(async (): Promise<UserName> => {
    return axiosInstance.get(endPoint.USERNAMES).then((response) => {
      return response.data as UserName
    })
  })

  static verifyUserCredentials = async (
    username: string,
    password: string
  ): Promise<{ success: boolean }> => {
    return axiosInstance
      .post(
        endPoint.VERIFY_CREDENTIALS,
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
}

export default TimmeyApi
