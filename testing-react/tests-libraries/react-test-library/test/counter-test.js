/* eslint-env jest */
import React from 'react'
import Counter from '../../../src/components/counter'
import { render, fireEvent } from 'react-testing-library'

describe('Counter suite', () => {
  test('when is mounted display text 0', () => {
    const { container } = render(<Counter />)
    expect(container.textContent).toEqual('0')
  })

  test('when is clicked one time, text must be 1', () => {
    const { container, getByText } = render(<Counter />)
    fireEvent.click(getByText(/0/))
    expect(container.textContent).toEqual('1')
  })
})
