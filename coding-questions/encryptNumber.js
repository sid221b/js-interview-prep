/*
Convert the given Number to a Code and vice-versa


A number can only be in the range of 1 to 190. A number can be transformed to code "xy" such that x is in range [A, S] and y is in range [0,9] and is in increasing order.
For example:


| Number |  Code  | 
| 1      |  A0    |
| 2      |  A1    |
| 11     |  B0    |
| 100    |  J9    |
| 190    |  S9    |
Implement function to get Code with given number
f(100) = "J9"


Implement function to get number with given code
f("J9") = 100
*/

const encryptFunc = (data) => {
  if (typeof data === 'string') {
    const mjr = (data.charCodeAt(0) - 65) * 10
    const mnr = Number(data[1]) + 1
    return mjr + mnr
  }

  const left = Math.floor(data / 10)
  const right = data % 10

  if (right === 0) {
    return String.fromCharCode(left + 64) + 9
  }
  return String.fromCharCode(left + 65) + (right - 1)
}

console.log(encryptFunc(190)) // S9
console.log(encryptFunc(100)) // J9
console.log(encryptFunc(11)) // B0
console.log(encryptFunc(2)) // A1
console.log(encryptFunc(1)) // A0

console.log(encryptFunc('S9')) // 190
console.log(encryptFunc('J9')) // 100
console.log(encryptFunc('B0')) // 11
console.log(encryptFunc('A1')) // 2
console.log(encryptFunc('A0')) // 1
