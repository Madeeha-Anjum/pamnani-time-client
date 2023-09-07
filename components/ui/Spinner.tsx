import React from 'react'
import Image from 'next/image'

const Spinner: React.FC = () => {
  return (
    <div className='flex justify-center animate-spinner'>
      <div className='w-9'>
        <Image
          src='/images/banana.svg'
          width={50}
          height={50}
          alt='Banana Spinner'
        />
      </div>
    </div>
  )
}
export default Spinner
