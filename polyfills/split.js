const customSplit = (str, separator) => {
  const result = []
  let current = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator || (separator === '' && current)) {
      result.push(current)
      current = ''
    }
    if (str[i] !== separator) {
      current += str[i]
    }
  }
  result.push(current)
  return result
}

console.log(customSplit('hello world', ' ')) // ['hello', 'world']

console.log(customSplit('hello world', '')) // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
