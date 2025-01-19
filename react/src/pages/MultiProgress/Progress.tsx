import React, { useEffect, useState } from 'react'

interface Props {
  id: number
  title: string
  completed?: boolean
  time: number
  onFinish: (id: number) => void
}

const Progress: React.FC<Props> = ({
  id,
  title,
  completed,
  time,
  onFinish,
}) => {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    console.log(id)
    setTimeout(() => {
      setProgress(100)
    }, 10)
    setTimeout(() => {
      setIsDone(true)
    }, time + 10)
  }, [])

  useEffect(() => {
    if (isDone) {
      onFinish(id)
    }
  }, [isDone])

  return (
    <div className='w-96 h-8 rounded-[8px] bg-slate-800 p-2 mb-4 relative z-0'>
      <div
        className={`absolute left-0 top-0 bottom-0 rounded-[8px] bg-green-600 z-0`}
        style={{
          width: `${progress}%`,
          transitionProperty: 'width',
          transitionDuration: `${time}ms`,
          transitionTimingFunction: 'linear',
        }}
      ></div>
      <div className='relative'>{title}</div>
    </div>
  )
}

export default Progress
