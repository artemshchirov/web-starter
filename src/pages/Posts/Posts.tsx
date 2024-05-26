import { FC } from 'react'

import Page from '../../layouts/Page'
import Section from '../../layouts/Section'
import GetPost from './GetPosts'
import CreatePost from './CreatePost'

const Contact: FC = () => {
  return (
    <Page>
      <Section className='rounded-md dark:bg-gray-800 dark:text-gray-100 max-w-[60vw]'>
        <CreatePost />
        <GetPost />
      </Section>
    </Page>
  )
}

export default Contact
