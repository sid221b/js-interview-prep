/*
  Given an array of integers and a target value, return the indices of the two numbers that add up to the target value.

  Example: 
  Input: [2, 7, 11, 15], target = 9
  Output: [0, 1]
  Explanation: Input[0] + Input[1] = 2 + 7 = 9

*/

function twoSum(arr, target) {
  let numbersMap = {}

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (numbersMap[diff] !== undefined) {
      return [numbersMap[diff], i]
    }
    numbersMap[arr[i]] = i
  }

  return []
}

const input1 = [2, 7, 11, 15]

console.log('Output 1 -> ', twoSum(input1, 9)) // Output: [0, 1]

const input2 = [3, 2, 4]

console.log('Output 2 -> ', twoSum(input2, 6)) // Output: [1, 2]
