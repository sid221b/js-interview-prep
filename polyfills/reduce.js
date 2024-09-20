const reduce = function (callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  const array = this
  let index = 0
  let accumulator

  if (arguments.length >= 2) {
    accumulator = initialValue
  } else {
    while (index < array.length && !(index in array)) {
      index++
    }
    if (index >= array.length) {
      throw new TypeError('Reduce of empty array with no initial value')
    }
    accumulator = array[index++]
  }

  while (index < array.length) {
    if (index in array) {
      accumulator = callback(accumulator, array[index], index, array)
    }
    index++
  }

  return accumulator
}
