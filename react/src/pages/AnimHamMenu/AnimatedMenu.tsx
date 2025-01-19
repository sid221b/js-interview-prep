import React from 'react'

interface AnimatedMenuI {
  isOpen: boolean
  onMenuClick: () => void
}

const AnimatedMenu: React.FC<AnimatedMenuI> = ({ isOpen, onMenuClick }) => {
  return (
    <button className='px-1 ' onClick={onMenuClick}>
      <span
        className='w-4 h-[1px] bg-neutral-300 mb-1 block  mt-1 duration-500'
        style={{
          transform: isOpen
            ? 'rotate(45deg) translate(2.5px, 3.5px)'
            : 'rotate(0deg) translate(0)',
        }}
      />
      <span
        className='w-4 h-[1px] bg-neutral-300 mb-1 block duration-500'
        style={{
          opacity: isOpen ? 0 : 1,
        }}
      />
      <span
        className='w-4 h-[1px] bg-neutral-300 mb-1 block duration-500'
        style={{
          transform: isOpen
            ? 'rotate(-45deg) translate(3.5px, -4.5px)'
            : 'rotate(0deg) translate(0)',
        }}
      />
    </button>
  )
}

export default AnimatedMenu
