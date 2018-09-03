function * sayHi () {
  const name = yield 'You need pass a name to the next iteration'
  console.log(`Hi ${name}`)
}

const iterator = sayHi()
const resultIteration = iterator.next()
console.log(resultIteration)
iterator.next('Joel')
