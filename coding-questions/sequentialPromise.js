const api = (...rest) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(...rest), 1000)
  })
}

const api1 = () => api(['apple'])
const api2 = (res) => api([...res, 'banana'])
const api3 = (res) => api([...res, 'orange'])

const promises = [api1, api2, api3]

const sequentialPromise = (promiseArr) => {
  return new Promise((resolve) => {
    let data
    let i = 0
    const runPromise = () => {
      promiseArr[i](data).then((res) => {
        data = res
        console.log(data)
        i++
        if (i === promiseArr.length) {
          resolve(data)
        } else {
          runPromise()
        }
      })
    }

    runPromise()
  })
}

sequentialPromise(promises).then((res) => {
  console.log('res -> ', res)
})
