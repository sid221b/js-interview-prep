/*
  Given an object flatten it in following fashion
  const obj = {
    a: {
      b: 10
    },
    c: {
      d: {
        e: 20,
        f: 30
      }
    }
  }
  output object should look like
  const output = {
    'a.b': 10,
    'c.d.e': 20,
    'c.d.f': 30
  }
*/

function flattenObject (obj, parentKey = '', result = {}) {
  // Iterate through each key in the object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Construct the new key
      const newKey = parentKey ? `${parentKey}.${key}` : key

      // If the value is an object and safe check for array and null, recursively flatten it
      if (
        typeof obj[key] === 'object' &&
        !Array.isArray(obj[key]) &&
        obj[key] !== null
      ) {
        flattenObject(obj[key], newKey, result)
      } else {
        // Otherwise, add the key-value pair to the result object
        result[newKey] = obj[key]
      }
    }
  }

  return result
}

const inputObject = {
  a: {
    b: 10
  },
  c: {
    d: {
      e: 20,
      f: 30
    }
  }
}

const output = flattenObject(inputObject)

console.log('🚀 ~ output:', output)
