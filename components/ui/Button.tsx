import React from 'react'
import classnames from 'classnames'
interface ButtonInterface {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children?: React.ReactNode
}

const Button: React.FC<ButtonInterface> = ({
  children,
  className,
  size = 'md',
  type = 'button',
  color = 'primary',
}) => {
  return (
    <button
      type={type}
      className={classnames(
        'px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm active:scale-90',
        size === 'sm' && 'px-2.5 py-1.5 text-xs max-w-20 w-20',
        size === 'md' && 'px-4 py-2 text-sm max-w-24 w-24',
        size === 'lg' && 'px-4 py-2 text-base max-w-xs  w-80',
        color === 'primary' &&
          'bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700',
        color === 'secondary' &&
          'bg-gray-600 border border-transparent rounded-md hover:bg-gray-700',
        color === 'danger' &&
          'bg-red-600 border border-transparent rounded-md hover:bg-red-700',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
