const funcs = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

const validFuncNames = Object.keys(funcs)

const isDigit = (char) => {
  return char >= '0' && char <= '9'
}

const isChar = (char) => {
  return char >= 'a' && char <= 'z'
}

const expressionParser = (expression) => {
  let stack = []

  let dig = ''
  let funcName = ''
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i]

    if (!char.trim()) {
      continue
    }

    if (isDigit(char)) {
      if (funcName !== '') {
        stack.push(funcName)
        funcName = ''
      }
      dig = dig + char
      console.log(dig)
    } else if (isChar(char)) {
      if (dig !== '') {
        stack.push(Number(dig))
        dig = ''
      }
      funcName = funcName + char
    } else if (char === ',') {
      if (funcName !== '') {
        stack.push(funcName)
        funcName = ''
      }
      if (dig !== '') {
        stack.push(Number(dig))
        dig = ''
      }
    } else if (char === ')') {
      if (funcName !== '') {
        stack.push(funcName)
        funcName = ''
      }
      if (dig !== '') {
        stack.push(Number(dig))
        dig = ''
      }
      let curRes = null
      let args = []
      while (stack.length && stack[stack.length - 1] !== '(') {
        let cur = stack.pop()
        if (typeof cur === 'string' && validFuncNames.includes(cur)) {
          curRes = funcs[cur](...args)
          args = []
        } else {
          args.push(cur)
        }
      }
      console.log('curRes ->', curRes)
      if (stack[stack.length - 1] === '(') {
        console.log(stack.pop())
      }
      stack.push(curRes)
    }
  }

  return stack[0]
}

expressionParser('add(sum(10, 20),20)')
