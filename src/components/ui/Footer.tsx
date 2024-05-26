import { FC } from 'react'
import CustomLink from '../CustomLink'

const Footer: FC = () => {
  return (
    <footer className='w-full p-4 bg-white rounded-md shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2024{' '}
        <CustomLink href='https://artemshchirov.github.io/portfolio/' className='hover:underline'>
          Artem Shchirov
        </CustomLink>
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <CustomLink
            href='https://github.com/artemshchirov/web-starter'
            className='hover:underline'
          >
            GitHub
          </CustomLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
