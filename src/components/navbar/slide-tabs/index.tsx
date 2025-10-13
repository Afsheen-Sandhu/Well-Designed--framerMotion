"use client";
import { Tab } from '@/components/navbar/tab'
import React from 'react'

export const SlideTabs = () => {
  return (
    <ul className='relative mx-auto flex items-center justify-between w-2xl h-18 rounded-2xl border-2 border-transparent bg-neutral-900/50 p-1'>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>
        <Tab>Blog</Tab>
        <Tab>Docs</Tab>
    </ul>
  )
}
