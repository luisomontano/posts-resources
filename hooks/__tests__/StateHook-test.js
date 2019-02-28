/* eslint-env jest */
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import StateHook from '../samples/StateHook.jsx'

describe('state hook suite', () => {
  afterEach(cleanup)

  test('Hook increment counter', () => {
    const { getByText, getByTestId, container } = render(<StateHook />)
    const textElement = container.querySelector('p')
    expect(textElement.textContent).toEqual('You clicked 0')
    fireEvent.click(getByTestId('button'))
    expect(getByText(/You clicked 1/i)).not.toBeNull()
  })

  test('Hook increment counter updating property', () => {
    const { getByText, getByTestId, rerender } = render(<StateHook message='Clicker count' />)
    fireEvent.click(getByTestId('button'))
    expect(getByText(/Clicker count 1/i)).not.toBeNull()
    rerender(<StateHook />)
    expect(getByText(/You clicked 1/i)).not.toBeNull()
  })
})
