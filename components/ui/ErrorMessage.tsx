import classnames from 'classnames'
import React from 'react'

interface ErrorMessageInterface {
  message: string | null
}

const ErrorMessage: React.FC<ErrorMessageInterface> = ({ message }) => {
  return (
    <p
      className={classnames(
        'italic text-orange-300 transition-all duration-500 ease-in-out',
        message ? 'visible' : 'opacity-0'
      )}
    >
      &nbsp;{message}
    </p>
  )
}

export default ErrorMessage
