/* eslint-env jest */
import React from 'react'
import { render, cleanup } from 'react-testing-library'
import EffectHook from '../samples/EffectHook'

describe('effect hook suite', () => {
  afterEach(cleanup)

  test('Hook first paint', () => {
    const { getByText } = render(<EffectHook />)
    expect(getByText(/Updating With Mount times 2/i)).not.toBeNull()
  })

  test('Hook increment counter updating property', () => {
    const { getByText, rerender } = render(<EffectHook message='Up to' />)
    expect(getByText(/Up to 2/i)).not.toBeNull()
    rerender(<EffectHook />)
    expect(getByText(/Updating With Mount times 5/i)).not.toBeNull()
  })
})
