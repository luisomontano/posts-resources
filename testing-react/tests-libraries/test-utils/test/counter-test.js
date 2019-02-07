/* eslint-env jest */
import React from 'react'
import { render } from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import Counter from '../../../src/components/counter'

describe('Counter suite', () => {
  let container = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
      render(<Counter />, container)
    })
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  test('when is mounted display text 0', () => {
    const div = container.querySelector('div')
    expect(div.textContent).toBe('0')
  })

  test('when is clicked one time, text must be 1', () => {
    const div = container.querySelector('div')
    Simulate.click(div)
    expect(div.textContent).toBe('1')
  })
})
