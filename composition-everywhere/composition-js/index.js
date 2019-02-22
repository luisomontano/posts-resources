const compose = require('./compose')

function toLowerCase (str) {
  return str.toLowerCase()
}

function replaceSpace (str) {
  return str.replace(' ', '')
}

const normalizeString = compose(toLowerCase, replaceSpace)

console.log(normalizeString('Hello World'))
