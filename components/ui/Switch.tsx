import React from 'react'
import classnames from 'classnames'

interface SwitchInterface {
  children: React.ReactNode
  onChange: () => void
  checked: boolean
  value?: string
  className?: string
}

const Switch: React.FC<SwitchInterface> = ({
  children,
  onChange,
  checked,
  value = '',
  className,
}) => {
  const background = 'bg-slate-900 dark:peer-checked:bg-gray-300'
  const ball =
    'after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:border-white'

  return (
    <label
      className={classnames(
        'relative inline-flex items-center cursor-pointer   justify-center',
        className
      )}
    >
      <input
        type='checkbox'
        onChange={onChange}
        checked={checked}
        value={value}
        className={classnames('sr-only peer')}
      />
      <div
        className={classnames(
          background,
          ball,
          'w-11 h-6 rounded-full peer peer-checked:after:translate-x-full'
        )}
      />
      <span>{children}</span>
    </label>
  )
}

export default Switch
