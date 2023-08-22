import Container from '@/components/Container'
import React from 'react'

const Page: React.FC = () => {
  const data = [
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      id: 1,
      date: '2023-10-02',
      timeRange: {
        start: '10:00',
        end: '18:00',
      },
      status: 'pending',
      totalTime: 8.2,
      comments:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    },
  ]

  return (
    <>
      <Container>
        {data.map((entry) => {
          return (
            <>
              <div className='p-4 border-b-2 border-b-black dark:border-b-white'>
                <div className='grid grid-cols-2 gap-y-4'>
                  <p className='text-xl font-bold'> {entry.date}</p>
                  <p className='text-xl font-bold text-right'>
                    {entry.totalTime}
                  </p>
                  <p className='px-2'>
                    &#8702; {entry.timeRange.start} - {entry.timeRange.end}
                  </p>
                  <p className='px-2 text-right'>{entry.status} </p>
                </div>

                <div>Comment </div>
                <div>{entry.comments} </div>
              </div>
            </>
          )
        })}
      </Container>
    </>
  )
}

export default Page
