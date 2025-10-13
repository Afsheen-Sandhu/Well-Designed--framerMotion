import React from 'react'
import { SlideTabs } from './slide-tabs'

export const Navbar = () => {
  return (
    <div className='sticky top-0 p-4 '>
      <div className='flex items-center justify-between px-5 mx-auto'>
        <img className='w-46 h-20 object-contain' src="/Logo.svg" alt="Logo" />
        <SlideTabs/>
      </div>
    </div>
  )
};


