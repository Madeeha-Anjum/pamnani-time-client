import classnames from 'classnames'
import React from 'react'
import ErrorMessage from './ErrorMessage'

type Type = 'text' | 'password' | 'email' | 'number'

interface InputInterface {
  className?: string
  id: string
  placeholder?: string
  type?: Type
  error: string | null
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputInterface> = ({
  className,
  error,
  id,
  placeholder = '',
  type = 'text',
  onChange,
}) => {
  return (
    <>
      <input
        className={classnames(
          'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-sec focus:shadow-outline',
          className
        )}
        onChange={onChange}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage message={error} />
    </>
  )
}

export default Input
