function * stopTheTime () {
  console.log('Generator, stop the time')
  yield
  console.log('The time is running again')
}

const iterator = stopTheTime()
iterator.next()
console.log('The time was stopped for the yield')
console.log('The time is stopped only for the generator function')
iterator.next()
