/* eslint-env jest */
const { toggleMachine } = require('../simple-toggle')

describe('Suite test simple toggle', () => {
  test('initial state of simple toggle must be inactive', () => {
    expect(toggleMachine.initialState.value).toBe('inactive')
  })

  test('when simple toggle receive TOGGLE must be active', () => {
    const nextState = toggleMachine.withContext({ terms: true }).transition('inactive', 'TOGGLE')
    expect(nextState.value).toBe('active')
  })

  test('when simple toggle receive TOGGLE must be inactive', () => {
    const nextState = toggleMachine.transition('active', 'TOGGLE')
    expect(nextState.value).toBe('inactive')
  })
})
