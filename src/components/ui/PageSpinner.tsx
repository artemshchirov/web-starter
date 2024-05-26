import { FC } from 'react'
import Page from '../../layouts/Page'

const PageSpinner: FC = () => {
  return (
    <Page>
      <div className='absolute transform -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 '>
        <div role='status'>
          <div className='w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin dark:border-gray-800'></div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </Page>
  )
}

export default PageSpinner
