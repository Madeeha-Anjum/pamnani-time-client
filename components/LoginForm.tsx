'use client'
import classnames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'

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
    router.push('/dash')
  }
  const filterOptions = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const regex = '/[^a-zA-Z]/'
    if (e.key.match(regex)) {
      users.filter((user) => user.name.includes(e.key))
    }
  }

  return (
    <div className='relative w-full max-w-lg text-md'>
      <form className='px-8 pt-6 pb-8 mb-4' onSubmit={submitHandler}>
        <div className='relative mb-4 '>
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
          <input
            className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-sec focus:shadow-outline'
            id='password'
            type='password'
            placeholder='*********'
          />
          <p className='invisible italic text-red-500'>Error</p>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className={classnames(
              'w-full max-w-xs p-2 active:scale-95 transition-all duration-150 ease-in-out',
              'text-white bg-black border-2 border-black rounded hover:text-black hover:bg-white',
              'dark:text-black dark:bg-white dark:border-white dark:hover:text-white dark:hover:bg-black'
            )}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
