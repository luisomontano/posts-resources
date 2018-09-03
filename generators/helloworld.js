function * helloWorldGenerators () {
  console.log('Hello World')
}

const iterator = helloWorldGenerators()
console.log('Before Hello World')
iterator.next()
console.log('After Hello World')
