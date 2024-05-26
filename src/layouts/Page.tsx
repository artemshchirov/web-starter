import React, { FC } from 'react'

import Header from '../components/ui/Header/Header'
import Footer from '../components/ui/Footer'
import cn from '../utils/cn'

interface PageProps {
  children: React.ReactNode
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between min-h-screen p-3 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'
      )}
    >
      <Header />
      <main className='flex flex-col items-center justify-center w-full h-full px-16 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page
