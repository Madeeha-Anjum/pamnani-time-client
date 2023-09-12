'use client'
import CreateClockInRecordRequest from '@/api/models/CreateClockInRecordRequest'
import CreateClockOutRecordRequest from '@/api/models/CreateClockOutRecordRequest'
import TimeeyError from '@/api/models/TimeeyError'
import UserCredentials from '@/api/models/UserCredentials'
import TimeeyApi from '@/api/timeeyApi'
import { useSessionStorage } from '@/hooks/useSessionStorage'
import { AxiosError } from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { createContext } from 'react'
import toast from 'react-hot-toast'

type InterfaceMenuContext = {
  login: (userCredentials: UserCredentials) => Promise<void>
  logout: () => void
  isLoggedIn: boolean
  createClockInRecord: (
    clockInRequest: CreateClockInRecordRequest
  ) => Promise<HistoryRecord>
  createClockOutRecord: (
    clockOutRequest: CreateClockOutRecordRequest
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
  const pathname = usePathname()
  const [userCredentials, setUserCredentials] =
    useSessionStorage<UserCredentials | null>('user-credentials', null)
  const isLoggedIn = !!userCredentials

  if (isLoggedIn) {
    TimeeyApi.setUserCredentials(userCredentials as UserCredentials)
  }

  const logout = () => {
    setUserCredentials(null)
    TimeeyApi.removeUserCredentials()
    router.push('/logout')
    toast.success('Logged out')
  }

  const login = async (userCredentials: UserCredentials) => {
    const toastId = toast.loading('Logging in...')

    try {
      await TimeeyApi.verifyUserCredentials(userCredentials)
      setUserCredentials(userCredentials)
      toast.success('Logged in')
      router.push('/time')
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

  const toastError = (error: unknown) => {
    if (error instanceof AxiosError && error.response?.status == 401) {
      if (pathname != '/login') {
        router.push('/login')
      } else {
        toast.error('Unauthorized. Please login again.')
        logout()
      }
      return
    }

    getErrorMessagesFromResponse(error).forEach((err) => {
      toast.error(err.message)
    })
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
  const createClockOutRecord = async (
    clockOutRequest: CreateClockOutRecordRequest
  ) => {
    const toastId = toast.loading('Clocking out...')
    try {
      const res = await TimeeyApi.createClockOutRecord(clockOutRequest)
      toast.success('Clocked out')
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
        logout,
        isLoggedIn,
        createClockInRecord,
        createClockOutRecord,
        getUserHistory,
        getLatestClockInRecord,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export { ApiContext, ApiProvider }
