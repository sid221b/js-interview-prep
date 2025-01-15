import React from 'react'

interface KeyPropsI {
  char: string
  onKeyClick: (key: string) => void
}

const Key: React.FC<KeyPropsI> = ({ char, onKeyClick }) => {
  const onClick = () => {
    onKeyClick(char)
  }

  return (
    <button
      onClick={onClick}
      className='flex items-center justify-center h-12 min-w-12 px-2 border-[1.5px] border-neutral-600 active:bg-neutral-700 hover:bg-neutral-900 hover:border-neutral-500 rounded font-semibold text-xl'
    >
      {char}
    </button>
  )
}

export default Key
