/* eslint-env jest */
import React from 'react'
import { render, cleanup } from 'react-testing-library'
import EffectHook from '../samples/EffectHook'

describe('effect hook suite', () => {
  afterEach(cleanup)

  test('Hook first paint', () => {
    const { getByText } = render(<EffectHook />)
    expect(getByText(/Message changes 1/i)).not.toBeNull()
  })

  test('Hook increment counter updating property', () => {
    const { getByText, rerender } = render(<EffectHook message='Up to' />)
    expect(getByText(/Up to 1/i)).not.toBeNull()
    rerender(<EffectHook />)
    expect(getByText(/Message changes 2/i)).not.toBeNull()
  })
})
