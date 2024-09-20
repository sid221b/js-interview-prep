const PromiseAll = (promiseArray = []) => {
  return new Promise((resolve, reject) => {
    const pendingSymbol = Symbol("pending")
    const results = Array(promiseArray.length).fill(pendingSymbol)
    promiseArray.forEach((promise, index) => {
      if (
        promise === null ||
        promise === undefined ||
        typeof promise.then !== "function"
      ) {
        results[index] = promise
        if (results.every((result) => result !== pendingSymbol)) {
          resolve(results)
        }
      } else {
        promise
          .then((result) => {
            results[index] = result
            if (results.every((result) => result !== pendingSymbol)) {
              resolve(results)
            }
          })
          .catch((error) => {
            reject(error)
          })
      }
    })
  })
}
