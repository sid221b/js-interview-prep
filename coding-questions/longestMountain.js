/*
Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The longest mountain is [1,4,7,3,2] which has length 5.

*/

function longestMountain(arr) {
  let maxLength = 0
  const n = arr.length

  for (let i = 1; i < n - 1; ) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1
      let right = i + 1

      while (left > 0 && arr[left] > arr[left - 1]) {
        left--
      }

      while (right < n - 1 && arr[right] > arr[right + 1]) {
        right++
      }

      const currentLength = right - left + 1
      maxLength = Math.max(maxLength, currentLength)

      i = right + 1
    } else {
      i++
    }
  }

  return maxLength
}

const input1 = [2, 1, 4, 7, 3, 2, 5]
const input2 = [2, 1, 4, 5, 6, 7, 6, 3, 2, 2, 3, 5, 1]

console.log('Output 1 -> ', longestMountain(input1)) // Output: 5
console.log('Output 2 -> ', longestMountain(input2)) // Output: 8
