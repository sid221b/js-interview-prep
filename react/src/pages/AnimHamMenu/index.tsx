import React, { useState } from 'react'
import Wrapper from './Wrapper'
import AnimatedMenu from './AnimatedMenu'

const AnimHamMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onMenuClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Wrapper>
      <div className='w-full h-full flex overflow-hidden bg-slate-900'>
        <div className='p-4'>
          {/* Top Screen Content goes here */}
          <h2>This is menu component</h2>
        </div>
        <div
          className='absolute top-0 left-0 h-full w-full flex-1 bg-neutral-800 p-6 duration-500'
          style={{
            transform: isOpen
              ? 'rotate(-10deg) translateY(80px) translateX(60px)'
              : 'rotate(0deg) translateY(0) translateX(0)',
            transformOrigin: 'top left',
            borderRadius: isOpen ? '20px' : '0',
            transitionProperty: 'borderRadius transform',
          }}
        >
          {/* Top Screen Content goes here */}
          <div>
            <AnimatedMenu isOpen={isOpen} onMenuClick={onMenuClick} />
          </div>
          <div className=''>AnimHamMenu</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AnimHamMenu
