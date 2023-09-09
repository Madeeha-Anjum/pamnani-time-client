import classnames from 'classnames'
import React from 'react'

interface ContainerInterface {
  children: React.ReactNode
  size?: 'medium'
}

const Container: React.FC<ContainerInterface> = ({
  children,
  size = 'large',
}) => {
  const setSize = () => {
    if (size === 'medium') return 'max-w-lg'
    if (size === 'large') return 'max-w-7xl'
  }

  return (
    <>
      <div className={classnames('p-2 sm:p-4 mx-auto w-full', setSize())}>
        {children}
      </div>
    </>
  )
}

export default Container
