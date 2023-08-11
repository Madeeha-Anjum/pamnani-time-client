'use client'
import classnames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './ui/Button'
import Input from './ui/Input'

interface LoginFormInterface {
  children?: React.ReactNode
}

const LoginForm: React.FC<LoginFormInterface> = ({ children }) => {
  const router = useRouter()
  const users = [
    { id: 'id-1', name: 'Mads' },
    { id: 'id-2', name: 'Pavs' },
    { id: 'id-3', name: 'Yats' },
    { id: 'id-4', name: 'Serg' },
    { id: 'id-5', name: 'Serg' },
    { id: 'id-6', name: 'Serg' },
    { id: 'id-7', name: 'Serg' },
    { id: 'id-8', name: 'Serg' },
    { id: 'id-9', name: 'Serg' },
    { id: 'id-10', name: 'Serg' },
    { id: 'id-11', name: 'Serg' },
  ]

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // login endpoint
    router.push('/time')
  }
  const filterOptions = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const regex = '/[^a-zA-Z]/'
    if (e.key.match(regex)) {
      users.filter((user) => user.name.includes(e.key))
    }
  }

  return (
    <div className='w-full max-w-lg text-md'>
      <form className='px-8 pt-6 pb-8 mb-4' onSubmit={submitHandler}>
        <div className='mb-4 '>
          <label
            className='block mb-2 font-bold text-gray-700 dark:text-white'
            htmlFor='username'
          >
            Select username
          </label>
          <select
            className={classnames(
              'w-full px-3 py-2 mt-1 -mb-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-sec focus:shadow-outline'
            )}
            inputMode='search'
            id='username'
            placeholder='Username'
            onKeyDown={filterOptions}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <p className='invisible italic text-red-500'>Error</p>
        </div>
        <div className='mb-6'>
          <label
            className='block mb-2 font-bold text-gray-700 dark:text-white'
            htmlFor='password'
          >
            Password
          </label>
          <Input error='d' id='username' placeholder='*********' />
        </div>
        <div className='text-center'>
          <Button color='primary' size='lg' type='submit'>
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
