'use client'
import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

interface ButtonAndLinkInterface {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'danger'
  children?: React.ReactNode
  className?: string
}
interface ButtonInterface extends ButtonAndLinkInterface {
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
interface LinkInterface extends ButtonAndLinkInterface {
  href: string
}

const Click: React.FC<
  | (ButtonInterface & { href?: never })
  | (LinkInterface & { onClick?: never; type?: never })
> = (props) => {
  if ('href' in props && 'onClick' in props) {
    throw new Error('Click component cannot have both href and onClick')
  }

  const determineSize = () => {
    switch (props.size) {
      case 'sm':
        return 'px-2.5 py-1.5 text-xs'
      case 'lg':
        return 'px-4 py-2 text-base'
      default:
      case 'md':
        return 'px-4 py-2 text-sm'
    }
  }
  const determineColor = () => {
    switch (props.color) {
      case 'secondary':
        return 'bg-gray-600 border border-transparent rounded-md hover:bg-gray-700'
      case 'danger':
        return 'bg-red-600 border border-transparent rounded-md hover:bg-red-700'
      default:
      case 'primary':
        return 'bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700'
    }
  }

  const clickClassNames = classnames(
    'px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm active:scale-90',
    determineColor(),
    determineSize(),
    props.className
  )

  if (!props.href) {
    return (
      <div>
        <button
          className={clickClassNames}
          type={props.type || 'button'}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </div>
    )
  } else {
    return (
      <Link href={props.href} className={clickClassNames}>
        {props.children}
      </Link>
    )
  }
}

export default Click
