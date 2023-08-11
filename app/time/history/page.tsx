import Button from '@/components/ui/Button'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      <main className='pt-4 text-center space-y-9'>
        <div>row 1 auto generate</div>
        <div>
          <h2 className='text-sm'>Current Time</h2>
        </div>
        <Button color='primary' size='lg'>
          Start
        </Button>
      </main>
    </>
  )
}
export default Page
