import { FC } from 'react'

import Page from '../../layouts/Page'
import Section from '../../layouts/Section'
import Card from './Card'
import team from '../../utils/constants'

const Contact: FC = () => {
  return (
    <Page>
      <Section className='rounded-md dark:bg-gray-800 dark:text-gray-100 max-w-[60vw] max-h-[60vh]'>
        <div className='flex flex-col items-center justify-center py-4 mx-auto sm:p-5'>
          <p className='p-2 text-sm font-medium tracking-wider text-center uppercase'>
            Development team
          </p>
          <h1 className='mb-10 text-4xl font-bold leading-none text-center sm:text-5xl'>
            The people behind the scenes
            {/* NOTE: use if you want to display the team members also */}
            {/* The talented people behind the scenes */}
          </h1>
          <div className='flex flex-row flex-wrap justify-center mt-8'>
            {team.map(member => (
              <Card key={member.id} {...member} />
            ))}
          </div>
        </div>
      </Section>
    </Page>
  )
}

export default Contact
