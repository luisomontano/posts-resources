function fakeFetch (url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {}
      })
    }, 1000)
  })
}

function * getResources () {
  console.log('Fetch started')
  const response = yield fakeFetch('')
  console.log('response', response)
  console.log('Fetch finished')
}

function GeneratorRunner (gen, ...parameters) {
  this.val = 10
  this.it = gen(parameters)
  this.handleError = this.handleError.bind(this)
  this.handleResult = this.handleResult.bind(this)
  this.run = this.run.bind(this)
  this.runNext = this.runNext.bind(this)
}

GeneratorRunner.prototype.handleError = function (err) {
  return Promise.resolve(this.it.throw(err))
    .then(this.handleResult)
}
GeneratorRunner.prototype.handleResult = function (nextIteration) {
  if (nextIteration.done) {
    return nextIteration.value
  } else {
    return Promise.resolve(nextIteration.value)
      .then(
        this.runNext,
        this.handleError
      )
  }
}

GeneratorRunner.prototype.run = function () {
  return Promise.resolve()
    .then(this.runNext)
}

GeneratorRunner.prototype.runNext = function (value) {
  const nextIteration = this.it.next(value)
  return this.handleResult(nextIteration)
}

const generatorGetResources = new GeneratorRunner(getResources)
generatorGetResources.run()
