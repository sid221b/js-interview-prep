import React, { useState } from 'react'
import { alphabetChars } from './utils'
import Key from './Key'

const AlphaKeyboard: React.FC = () => {
  const [userInput, setUserInput] = useState('')

  const onKeyPress = (char: string) => {
    const lastIndex = userInput.length - 1
    if (userInput[lastIndex] === char && userInput[lastIndex - 1] === char) {
      setUserInput(userInput.substring(0, lastIndex - 1) + '_')
    } else {
      setUserInput(userInput + char)
    }
  }

  const clearInput = (char: string) => {
    setUserInput('')
  }

  return (
    <div>
      <p className='text-center text-2xl tracking-widest min-h-12 bg-neutral-900 py-2 rounded-md'>
        {userInput}
      </p>
      <section className='flex gap-4 flex-wrap justify-center max-w-screen-md m-auto mt-12'>
        {alphabetChars.map((char) => (
          <Key key={char} char={char} onKeyClick={onKeyPress} />
        ))}
        <Key char='Clear' onKeyClick={clearInput} />
      </section>
    </div>
  )
}

export default AlphaKeyboard
