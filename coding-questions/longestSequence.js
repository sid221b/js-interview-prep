/*

Given an array of integers, find the length of the longest sub-sequence such 
that elements in the subsequence are consecutive integers, the consecutive
numbers can be in any order. 

Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
Output: 4
Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements


Input: arr[] = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]
Output: 5
Explanation: The subsequence 36, 35, 33, 34, 32 is the longest subsequence of consecutive elements.


Video link: https://www.youtube.com/watch?v=Nc_-78QymSw
*/

function getMaxSequenceLength(arr = []) {
  let currentCount = 1
  let preMaxCount = 1
  let arrElementsMap = {}
  arr.forEach((element) => {
    arrElementsMap[element] = true
  })

  for (let i = 0; i < arr.length; i++) {
    // is previous part of sequence or not part of any sequence
    if (arrElementsMap[arr[i] - 1] || !arrElementsMap[arr[i] + 1]) {
      preMaxCount = Math.max(preMaxCount, currentCount)
      currentCount = 1
      continue
    } else {
      // Start of a sequence
      let checkingNextItems = true
      let currentNumber = arr[i]
      while (checkingNextItems) {
        // if next number is not part of sequence
        if (!arrElementsMap[currentNumber + 1]) {
          checkingNextItems = false
          preMaxCount = Math.max(preMaxCount, currentCount)
          currentCount = 1
        } else {
          // if next number is part of sequence
          currentCount += 1
          currentNumber += 1
        }
      }
    }
  }

  return Math.max(currentCount, preMaxCount)
}

const inputArr1 = [1, 9, 3, 10, 4, 20, 2]

const inputArr2 = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]

console.log('Output 1 -> ', getMaxSequenceLength(inputArr1))

console.log('Output 2 -> ', getMaxSequenceLength(inputArr2))
