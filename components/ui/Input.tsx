import classnames from 'classnames'
import React from 'react'

type Type = 'text' | 'password' | 'email' | 'number'

interface InputInterface {
  className?: string
  id: string
  placeholder?: string
  type?: Type
  error?: string
}

const Input: React.FC<InputInterface> = ({
  className,
  error,
  id,
  placeholder = '',
  type = 'text',
}) => {
  return (
    <>
      <input
        className={classnames(
          'w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-sec focus:shadow-outline',
          className
        )}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <p
        className={classnames(
          'italic text-orange-300',
          error ? 'visible ' : 'invisible'
        )}
      >
        {error ? <div>Error: {error}</div> : '&nbsp;'}
      </p>
    </>
  )
}

export default Input
