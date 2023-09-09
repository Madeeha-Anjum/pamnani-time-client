'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {}

const Navbar: React.FC<Props> = () => {
  const currPath = usePathname()

  const setActiveClassNames = (activePath: string) => {
    return currPath === activePath
      ? 'group border-b-2 border-black dark:border-white'
      : ' '
  }

  return (
    <nav className='p-2'>
      <ul className='grid grid-cols-2 text-center'>
        <li className={setActiveClassNames('/time')}>
          <Link className='block' href='/time'>
            Time Entry
          </Link>
        </li>
        <li className={setActiveClassNames('/time/history')}>
          <Link className='block' href='/time/history'>
            History
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
