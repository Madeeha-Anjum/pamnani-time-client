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
  return (
    <>
      <div
        className={classnames(
          'p-2 sm:p-4 mx-auto w-full',
          size === 'medium' && 'max-w-lg',
          size === 'large' && 'max-w-7xl'
        )}
      >
        {children}
      </div>
    </>
  )
}

export default Container
