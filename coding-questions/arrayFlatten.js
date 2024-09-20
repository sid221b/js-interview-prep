function flattenArray(arr) {
  let result = []

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element))
    } else {
      result.push(element)
    }
  })

  return result
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6]
const flatArray = flattenArray(nestedArray)
console.log(flatArray) // Output: [1, 2, 3, 4, 5, 6]
