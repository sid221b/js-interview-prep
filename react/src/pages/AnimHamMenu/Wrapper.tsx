import React from 'react'

interface Props {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className='relative inline'>
      {/* <img
        src={iphone}
        className='w-[calc(536px*0.7)] h-[calc(1104px*0.7)] relative z-10'
      /> */}
      <div className='absolute top-1.5 left-2 w-[calc(536px*0.67)] h-[calc(1104px*0.69)] z-0 rounded-2xl overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
