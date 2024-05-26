import { FC } from 'react'

interface SectionProps {
  className?: string
  children: React.ReactNode
}

const Section: FC<SectionProps> = ({ className, children }) => {
  const initClassName =
    'w-full p-6 mb-3 rounded-md text-black bg-white h-max last:mb-0 lg:p-8 dark:bg-gray-800 dark:text-gray-100 '
  const finalClassName = className ? initClassName + className : initClassName

  return <section className={finalClassName}>{children}</section>
}

export default Section
