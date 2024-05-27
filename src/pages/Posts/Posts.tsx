import { FC } from 'react'

import Page from '../../layouts/Page'
import Section from '../../layouts/Section'
import GetPost from './GetPosts'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
import DeletePost from './DeletePost'

const Contact: FC = () => {
  return (
    <Page>
      <Section className='rounded-md dark:bg-gray-800 dark:text-gray-100 max-w-[60vw] grid grid-cols-2 grid-rows-2 gap-4 border'>
        <GetPost />
        <CreatePost />
        <UpdatePost />
        <DeletePost />
      </Section>
    </Page>
  )
}

export default Contact
