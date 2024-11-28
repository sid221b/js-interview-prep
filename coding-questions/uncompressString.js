const isNumber = (str) => {
  return !isNaN(Number(str))
}

const uncompressedString = (str) => {
  const stack = []
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i])) {
      stack.push(Number(str[i]))
    } else if (str[i] === '[') {
      stack.push(str[i])
    } else if (str[i] === ']') {
      let temp = ''
      while (stack[stack.length - 1] !== '[') {
        temp = stack.pop() + temp
      }
      stack.pop()
      let num = stack.pop()
      stack.push(temp.repeat(num))
    } else {
      stack.push(str[i])
    }
  }
  return stack.join('')
}

console.log(uncompressedString('2[ab4[cd]]')) // 'abcdcddddcdcdddd'
console.log(uncompressedString('2[ab]')) // 'abab'
console.log(uncompressedString('2[ab]3[cd]ef')) // 'ababcdcdcdef'
console.log(uncompressedString('2[a3[c]]')) // 'abcdcdcdabcdcdcd'
