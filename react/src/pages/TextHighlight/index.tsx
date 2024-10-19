'use client'
import React, { useEffect, useState } from 'react'

type HighlightedState = 'none' | 'red' | 'green'

interface TextFile {
  word: string
  id: number
  highlightedState: HighlightedState
  isSelected?: boolean
}

const defaultText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const TextHighlight = () => {
  const [textFile, setTextFile] = useState(defaultText)
  const [textFileParsed, setTextFileParsed] = useState<TextFile[]>([])
  const [selectedWord, setSelectedWord] = useState<TextFile[]>([])

  useEffect(() => {
    if (textFile) {
      const parsedData: TextFile[] = textFile.split(' ').map((word, index) => ({
        word,
        id: index,
        highlightedState: 'none',
        isSelected: false,
      }))
      setTextFileParsed(parsedData)
    }
  }, [])

  const onWordClick = (id: number) => {
    const newState: TextFile[] = textFileParsed.map((wordItem) => {
      if (wordItem.id === id) {
        return {
          ...wordItem,
          isSelected: !wordItem.isSelected,
        }
      }
      return wordItem
    })

    setTextFileParsed(newState)
  }

  const onGreenClick = () => {
    const newState: TextFile[] = textFileParsed.map((wordItem) => {
      if (wordItem.isSelected) {
        return {
          ...wordItem,
          isSelected: false,
          highlightedState: 'green',
        }
      }
      return wordItem
    })

    setTextFileParsed(newState)
  }

  const onRedClick = () => {
    const newState: TextFile[] = textFileParsed.map((wordItem) => {
      if (wordItem.isSelected) {
        return {
          ...wordItem,
          isSelected: false,
          highlightedState: 'red',
        }
      }
      return wordItem
    })

    setTextFileParsed(newState)
  }

  const onDefaultClick = () => {
    const newState: TextFile[] = textFileParsed.map((wordItem) => {
      if (wordItem.isSelected) {
        return {
          ...wordItem,
          isSelected: false,
          highlightedState: 'none',
        }
      }
      return wordItem
    })

    setTextFileParsed(newState)
  }

  return (
    <div className='bg-black h-screen w-full'>
      <main className='pt-24 mx-auto px-4 flex flex-col items-center w-full md:w-[720px] lg:w-[1024px]'>
        <h1 className='mb-12'>Text Highlighter</h1>
        <p className='dark:bg-neutral-800 bg-neutral-200 p-4 w-full md:w-[50%] mb-4 rounded-lg dark:text-neutral-100'>
          {textFileParsed.map((wordItem) => {
            const { word, id, highlightedState, isSelected } = wordItem
            let style = ''
            if (highlightedState === 'red') {
              style = 'bg-red-500 text-white hover:bg-red-600'
            } else if (highlightedState === 'green') {
              style = 'bg-green-500 text-white hover:bg-green-600'
            } else {
              style = 'dark:hover:bg-neutral-700 hover:bg-neutral-300'
            }
            if (isSelected) {
              style = 'dark:bg-violet-500 bg-violet-300 ' + style
            }
            return (
              <span
                key={id}
                className={`${style} inline-block px-[2px] rounded mx-[1px] mb-[1px] cursor-pointer`}
                onClick={() => onWordClick(id)}
              >
                {word}
              </span>
            )
          })}
        </p>
        <div className='flex gap-4'>
          <button
            className='w-28 md:w-36 py-2 rounded hover:opacity-95 hover:scale-[101%]  bg-red-500 text-white'
            onClick={onRedClick}
          >
            Mark Red
          </button>
          <button
            className='w-28 md:w-36 py-2 rounded hover:opacity-95 hover:scale-[101%] bg-gray-700 text-white'
            onClick={onDefaultClick}
          >
            Remove Highlight
          </button>
          <button
            className='w-28 md:w-36 py-2 rounded hover:opacity-95 hover:scale-[101%] bg-green-600 text-white'
            onClick={onGreenClick}
          >
            Mark Green
          </button>
        </div>

        <div className='w-full md:w-[50%] my-12'>
          <h2>Enter your custom text</h2>
          <textarea
            className='block w-full mb-4 h-32 dark:bg-neutral-800 p-4 rounded-lg dark:text-stone-300 bg-neutral-200 text-stone-700'
            value={textFile}
            onChange={(e) => setTextFile(e.target.value)}
          />

          <button
            className='w-full py-2 rounded hover:opacity-95 hover:scale-[101%] bg-blue-600 text-white'
            onClick={() => {
              const parsedData: TextFile[] = textFile
                .split(' ')
                .map((word, index) => ({
                  word,
                  id: index,
                  highlightedState: 'none',
                  isSelected: false,
                }))
              setTextFileParsed(parsedData)
            }}
          >
            Update
          </button>
        </div>
      </main>
    </div>
  )
}

export default TextHighlight
