'use client'
import classnames from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Input from './ui/Input'
import Label from './ui/Label'
import Click from './ui/Click'
import TimeeyApi from '@/api/timmeyApi'
import Username from '@/api/models/Username'
import TimeeyError from '@/api/models/TimeeyError'
import { LoginContext } from '@/store/loginContext'
import ErrorMessage from './ui/ErrorMessage'

interface LoginFormProps {
  usernames: Username[]
}

const LoginForm: React.FC<LoginFormProps> = ({ usernames: usernames }) => {
  const router = useRouter()
  const [users, setUsers] = useState<Username[]>([])
  const [selectedUser, setSelectedUser] = useState<string>('')
  const [userError, setUserError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [error, setError] = useState<Array<TimeeyError> | null>(null)

  const loginCtx = React.useContext(LoginContext)

  useEffect(() => {
    if (usernames) setUsers(usernames)
  }, [usernames])

  const validateLogin = () => {
    if (selectedUser === '') {
      setUserError('Please select a username')
    } else {
      setUserError('')
    }
    if (password === '') {
      setPasswordError('Please enter a password')
    } else {
      setPasswordError('')
    }
    return selectedUser !== '' && password !== ''
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    if (!validateLogin()) return

    loginCtx.login(selectedUser, password).then((res) => router.push('/time'))

    // await TimmeyApi.verifyUserCredentials(selectedUser, password)
    //   .then((res) => {
    //     if (res.success) {
    //       router.push('/time')
    //     }
    //   })
    //   .catch((err) => {
    //     setError(err as Array<TimmyError>)
    //   })
  }

  const filterOptions = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const regex = '/[^a-zA-Z]/'
    if (e.key.match(regex)) {
      users.filter((user) => user.includes(e.key))
    }
  }

  const customLogin = async () => {}

  return (
    <>
      <form className='px-8 pt-6' onSubmit={submitHandler}>
        <div className='mb-4'>
          <Label htmlFor='username'>Select username</Label>
          <select
            className={classnames(
              'w-full px-3 py-2 mt-1 -mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-sec focus:shadow-outline'
            )}
            inputMode='search'
            id='username'
            onKeyDown={filterOptions}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value=''>Select username</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <ErrorMessage message={userError} />
        </div>
        <div className=''>
          <Label htmlFor='password'>Password</Label>
          <Input
            error={passwordError}
            id='username'
            placeholder='*********'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            // move the eye icon to the right to help password managers
            className='pr-6'
          />
        </div>
        <p className='h-8 max-w-xs mx-auto overflow-y-auto'>
          {error?.map((err) => (
            <ErrorMessage key={err.code} message={err.message} />
          ))}
        </p>
        <Click color='primary' size='lg' type='submit' className='w-full'>
          Login
        </Click>
      </form>

      <Click onClick={customLogin}>Custom Login</Click>
    </>
  )
}
export default LoginForm
