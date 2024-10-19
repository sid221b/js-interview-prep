/*
  Given a number return square root of a number
*/

function squareRoot(num) {
  let start = 0
  let end = Math.floor(num / 2) + 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const midSq = mid * mid
    if (midSq === num) {
      return mid
    } else if (midSq > num) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return end
}

console.log('Output 1 -> ', squareRoot(4)) // 2
console.log('Output 2 -> ', squareRoot(8)) // 2
console.log('Output 3 -> ', squareRoot(9)) // 3
console.log('Output 4 -> ', squareRoot(36)) // 6
console.log('Output 5 -> ', squareRoot(729)) // 27
