/*
  Given an array of characters, return the first non-repeating character.
  If there are no non-repeating characters, return -1.

  Eg: 
  Input : ['a', 'b', 'c', 'a', 'b', 'c', 'd']
  Output : 'd'

*/

function getFirstNonRepeatingChar(arr = []) {
  let charMap = {}
  for (let i = 0; i < arr.length; i++) {
    if (charMap[arr[i]]) {
      charMap[arr[i]] += 1
    } else {
      charMap[arr[i]] = 1
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (charMap[arr[i]] === 1) {
      return arr[i]
    }
  }

  return -1
}

const input1 = ['a', 'b', 'c', 'a', 'b', 'c', 'd']

const input2 = ['a', 'b', 'c', 'a', 'b', 'c', 'd', 'd']

console.log('Output 1 -> ', getFirstNonRepeatingChar(input1)) // d
console.log('Output 2 -> ', getFirstNonRepeatingChar(input2)) // -1
