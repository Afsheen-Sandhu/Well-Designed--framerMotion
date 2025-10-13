import React from 'react'

export const Tab = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
    className='relative z-10 block cursor-pointer px-3 py-1.5
    text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2.5 md:text-sm hover:bg-neutral-800 rounded-2xl
    '>
        {children}
    </li>
  )
}
