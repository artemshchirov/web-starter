import { FC } from 'react'

import Page from '../layouts/Page'
import Section from '../layouts/Section'

const Home: FC = () => {
  return (
    <Page>
      <Section className='max-w-max'>
        Welcome To Vite, React, TypeScript, Primereact Web Starter!
      </Section>
    </Page>
  )
}

export default Home
