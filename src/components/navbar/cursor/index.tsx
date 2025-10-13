import React from 'react'
import { motion } from 'framer-motion'

type Position = {
    left: number,
    width: number,
    opacity: number
}
export const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      initial={{ left: 0, width: 0, opacity: 0 }}
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 50,
        mass: 0.8,

      }}
      className='absolute top-1 z-0 h-16 rounded-2xl bg-neutral-800/70'
    />
  )
}
