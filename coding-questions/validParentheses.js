function validateParenthesesInString(str) {
  let myStack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      myStack.push('(')
    } else if (str[i] === ')' && myStack.length === 0) {
      return false
    } else if (str[i] === ')') {
      myStack.pop()
    }
  }
  return myStack.length > 0 ? false : true
}

console.log(validateParenthesesInString('(abc(def)')) // false
console.log(validateParenthesesInString('abc(def)')) // true
console.log(validateParenthesesInString('abc(def)g')) // true
console.log(validateParenthesesInString('((abc)(def)g)')) // true
