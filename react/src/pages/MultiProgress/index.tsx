import React, { useCallback, useEffect, useState } from 'react'
import Progress from './Progress'

type Task = {
  id: number
  title: string
  completed?: boolean
  time: number
}

const progressTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    time: 3000,
  },
  {
    id: 2,
    title: 'Task 2',
    time: 5000,
  },
  {
    id: 3,
    title: 'Task 3',
    time: 10000,
  },
  {
    id: 4,
    title: 'Task 4',
    time: 8000,
  },
  {
    id: 5,
    title: 'Task 5',
    time: 18000,
  },
  {
    id: 6,
    title: 'Task 6',
    time: 15000,
  },
  {
    id: 7,
    title: 'Task 7',
    time: 5000,
  },
  {
    id: 8,
    title: 'Task 8',
    time: 6000,
  },
]

const MultiProgress = () => {
  const [currentRunning, setCurrentRunning] = useState<Task[]>([])
  console.log('🚀 ~ MultiProgress ~ currentRunning:', currentRunning)

  useEffect(() => {
    setCurrentRunning(progressTasks.slice(0, 3))
  }, [])

  useEffect(() => {
    if (currentRunning.length > 0) {
      const isAllCompleted =
        currentRunning.filter(({ completed }) => !completed).length === 0
      if (isAllCompleted) {
        alert('All Task are completed')
      }
    }
  }, [currentRunning])

  const onFinish = useCallback(
    (id: number) => {
      console.log('id---', id, progressTasks.length, currentRunning.length)
      if (progressTasks.length > currentRunning.length) {
        setCurrentRunning([
          ...currentRunning.map((itm) =>
            itm.id === id ? { ...itm, completed: true } : itm
          ),
          progressTasks[currentRunning.length],
        ])
      } else {
        setCurrentRunning([
          ...currentRunning.map((itm) =>
            itm.id === id ? { ...itm, completed: true } : itm
          ),
        ])
      }
    },
    [currentRunning]
  )

  return (
    <div>
      <h1>Multi Progress</h1>
      <div>
        {currentRunning.map((task, index) => (
          <Progress key={task.id} onFinish={onFinish} {...task} />
        ))}
      </div>
    </div>
  )
}

export default MultiProgress
