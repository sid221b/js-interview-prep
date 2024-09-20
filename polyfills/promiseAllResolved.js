const PromiseAllResolved = (promiseArray = []) => {
  return new Promise((resolve, reject) => {
    const pendingSymbol = Symbol("pending")
    const results = Array(promiseArray.length).fill(pendingSymbol)
    promiseArray.forEach((promise, index) => {
      if (
        promise === null ||
        promise === undefined ||
        typeof promise.then !== "function"
      ) {
        results[index] = { data: promise, error: null }
        if (results.every((result) => result !== pendingSymbol)) {
          resolve(results)
        }
      } else {
        promise
          .then((result) => {
            results[index] = { data: result, error: null }
            if (results.every((result) => result !== pendingSymbol)) {
              resolve(results)
            }
          })
          .catch((error) => {
            results[index] = { data: null, error }
            if (results.every((result) => result !== pendingSymbol)) {
              resolve(results)
            }
          })
      }
    })
  })
}
