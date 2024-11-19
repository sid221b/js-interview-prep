import { useState, useRef } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0)
  const intervalId = useRef()

  const startTimer = () => {
    if (intervalId.current) {
      return
    }

    intervalId.current = setInterval(() => {
      setTimer((previousTime) => previousTime + 1)
    }, 1000)
  }

  const pauseTimer = () => {
    clearInterval(intervalId.current)
    intervalId.current = null
  }

  const resetTimer = () => {
    clearInterval(intervalId.current)
    setTimer(0)
    intervalId.current = null
  }

  return (
    <>
      <p>{timer}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resetTimer}>stop</button>
    </>
  )
}

export default Timer
