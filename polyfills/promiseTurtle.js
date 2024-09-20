const turtlePromise = (promiseArr) => {
  const promise = new Promise((resolve, reject) => {
    let count = 0
    let result = null
    promiseArr.forEach((prom, index) => {
      Promise.resolve(prom)
        .then((res) => {
          count++
          result = res
          if (count === promiseArr.length) {
            resolve(result)
          }
        })
        .catch((error) => {
          count++
          result = error
          if (count === promiseArr.length) {
            reject(result)
          }
        })
    })
  })
  return promise
}
