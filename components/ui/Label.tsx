import React from 'react'

interface LabelInterface {
  children: React.ReactNode
  htmlFor: string
}

const Label: React.FC<LabelInterface> = ({ children, htmlFor }) => {
  return (
    <label
      className='block mb-2 font-bold text-gray-700 dark:text-white'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

export default Label
