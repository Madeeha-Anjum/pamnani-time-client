'use client'

import CreateClockInRecordRequest from '@/api/models/CreateClockInRecordRequest'
import TimeeyError from '@/api/models/TimeeyError'
import UserCredentials from '@/api/models/UserCredentials'
import TimeeyApi from '@/api/timmeyApi'
import { useSessionStorage } from '@/hooks/useSessionStorage'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { createContext, useEffect } from 'react'
import toast from 'react-hot-toast'

type InterfaceMenuContext = {
  login: (userCredentials: UserCredentials) => Promise<void>
  createClockInRecord: (
    clockInRequest: CreateClockInRecordRequest
  ) => Promise<HistoryRecord>
  getUserHistory: () => Promise<HistoryRecord[]>
  getLatestClockInRecord: () => Promise<HistoryRecord | undefined>
}

const ApiContext = createContext<InterfaceMenuContext>(
  {} as InterfaceMenuContext
)

type InterfaceMenuProvider = {
  children: React.ReactNode
}

const getErrorMessagesFromResponse = (error: any): Array<TimeeyError> => {
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

const ApiProvider: React.FC<InterfaceMenuProvider> = ({ children }) => {
  const router = useRouter()
  const [userCredentials, setUserCredentials] =
    useSessionStorage<UserCredentials | null>('user-credentials', null)

  useEffect(() => {
    if (userCredentials) {
      TimeeyApi.setUserCredentials(userCredentials)
    }
  }, [userCredentials])

  const toastError = (error: unknown) => {
    if (error instanceof AxiosError && error.response?.status == 401) {
      toast.error('Unauthorized. Please login again.')
      router.push('/')
      return
    }

    getErrorMessagesFromResponse(error).forEach((err) => {
      toast.error(err.message)
    })
  }

  const login = async (userCredentials: UserCredentials) => {
    const toastId = toast.loading('Logging in...')

    try {
      await TimeeyApi.verifyUserCredentials(userCredentials)
      router.push('/time')

      toast.success('Logged in')
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status == 401) {
        toast.error('Invalid Password')
        return
      }

      throw error
    } finally {
      toast.dismiss(toastId)
    }
  }

  const createClockInRecord = async (
    clockInRequest: CreateClockInRecordRequest
  ) => {
    const toastId = toast.loading('Clocking in...')
    try {
      const res = await TimeeyApi.createClockInRecord(clockInRequest)
      toast.success('Clocked in')
      return res.data
    } catch (error) {
      toastError(error)
      throw error
    } finally {
      toast.dismiss(toastId)
    }
  }

  const getUserHistory = async () => {
    const toastId = toast.loading('Loading history...')
    try {
      const res = await TimeeyApi.getUserHistory()
      toast.success('Loaded history')
      return res.data
    } catch (error) {
      toastError(error)
      throw error
    } finally {
      toast.dismiss(toastId)
    }
  }

  const getLatestClockInRecord = async () => {
    const historyRecords = await getUserHistory()

    return historyRecords.find(
      (record) => record.endDatetime == null && record.totalTime == null
    )
  }

  return (
    <ApiContext.Provider
      value={{
        login,
        createClockInRecord,
        getUserHistory,
        getLatestClockInRecord,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export { ApiContext, ApiProvider }
