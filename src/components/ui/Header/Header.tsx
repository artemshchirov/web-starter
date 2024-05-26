import { FC } from 'react'

import CustomLink from '../../CustomLink'
import BurgerMenu from './BurgerMenu'
import logo from '../../../assets/logo.png'

import ROUTE_PATHS from '../../../utils/routePaths'

const Header: FC = () => {
  return (
    <header className='w-full p-4 border-gray-200 rounded-md bg-gray-50 dark:bg-gray-800 md:px-6 dark:border-gray-700'>
      <div className='container flex flex-wrap items-center justify-between min-w-full'>
        <CustomLink href={ROUTE_PATHS.HOME} className='flex items-center'>
          <img src={logo} className='h-6 mr-3 sm:h-10' alt='App Logo' />
          <span className='self-center text-xl font-semibold text-black dark:text-white'>
            Web Starter
          </span>
        </CustomLink>

        <BurgerMenu>
          <ul className='flex flex-col mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
            <li>
              <CustomLink
                href={ROUTE_PATHS.HOME}
                className='block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                activeClassName='dark:text-white underline'
              >
                Home
              </CustomLink>
            </li>
            <CustomLink
              href={ROUTE_PATHS.POSTS}
              className='mr-auto block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              activeClassName='dark:text-white underline'
            >
              Posts
            </CustomLink>
            <li>
              <CustomLink
                href={ROUTE_PATHS.ABOUT}
                className='block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                activeClassName='dark:text-white underline'
              >
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href={ROUTE_PATHS.CONTACT}
                className='block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                activeClassName='dark:text-white underline'
              >
                Contact
              </CustomLink>
            </li>
          </ul>
        </BurgerMenu>
      </div>
    </header>
  )
}

export default Header
