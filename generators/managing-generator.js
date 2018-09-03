function * sumGenerator () {
  let x = yield 10
  let y = yield 10
  return x * y
}

function executor (generator) {
  const iterator = generator()
  let lastIteration = {}

  while (!lastIteration.done) {
    lastIteration = iterator.next(lastIteration.value)
  }

  console.log(lastIteration)
}

executor(sumGenerator)
