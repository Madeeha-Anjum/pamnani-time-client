import Container from '@/components/ui/Container'
import Icon from '@/components/icon/Icon'
import React, { cache } from 'react'
import TimmeyApi from '@/api/timmeyApi'

/**
 * Preload data for the page
 * Cache until the server is restarted
 * @returns {Promise }
 */
const preload = cache(async (): Promise<any> => {
  return TimmeyApi.getUserHistory()
})

const Page: React.FC = async () => {
  const userHistory = await preload()

  return (
    <Container>
      {userHistory.map(
        (entry: {
          date:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined
          totalTime:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined
          timeRange: {
            start:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined
            end:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined
          }
          status:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined
          comments:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined
        }) => {
          return (
            <>
              <div className='p-4 border-b-2 last:border-b-0 border-b-black dark:border-b-white'>
                <div className='grid grid-cols-2 gap-y-4'>
                  <p className='text-xl font-bold'> {entry.date}</p>
                  <p className='text-xl font-bold text-right'>
                    {entry.totalTime}
                  </p>
                  <div className='flex items-center px-2 space-x-2 '>
                    <p>
                      <Icon.Triangle className='w-5 rotate-90'></Icon.Triangle>
                    </p>
                    <div>
                      {entry.timeRange.start} - {entry.timeRange.end}
                    </div>
                  </div>
                  <p className='px-2 text-right'>{entry.status} </p>
                </div>

                <div>Comment </div>
                <div>{entry.comments} </div>
              </div>
            </>
          )
        }
      )}
    </Container>
  )
}

export default Page
