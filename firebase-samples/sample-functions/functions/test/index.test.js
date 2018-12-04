/* global describe, it */
const myFunctions = require('../index.js')
const chai = require('chai')
const assert = chai.assert

describe('hello world test', () => {
  it('should return a greeting message', (done) => {
    const req = {}

    const res = {
      send: (message) => {
        assert.equal(message, 'Hello from Firebase!')
        done()
      }
    }

    myFunctions.helloWorld(req, res)
  })
})
