'use client'
import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
interface ClickInterface {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  className?: string
  children?: React.ReactNode
}

const Click: React.FC<ClickInterface> = ({
  children,
  className,
  size = 'md',
  type = 'button',
  color = 'primary',
  href = '',
}) => {
  const xx = classnames(
    'px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm active:scale-90',
    size === 'sm' && 'px-2.5 py-1.5 text-xs',
    size === 'md' && 'px-4 py-2 text-sm',
    size === 'lg' && 'px-4 py-2 text-base',
    color === 'primary' &&
      'bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700',
    color === 'secondary' &&
      'bg-gray-600 border border-transparent rounded-md hover:bg-gray-700',
    color === 'danger' &&
      'bg-red-600 border border-transparent rounded-md hover:bg-red-700',
    className
  )

  if (href !== '') {
    return (
      <Link href={href} className={xx}>
        {children}
      </Link>
    )
  }

  return (
    <button className={xx} type={type}>
      {children}
    </button>
  )
}

export default Click
