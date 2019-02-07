/* eslint-env jest */
import React from 'react'
import Counter from '../../../src/components/counter'
import TestRenderer from 'react-test-renderer'

describe('Counter suite', () => {
  test('when is mounted display text 0', () => {
    const component = TestRenderer.create(<Counter />)
    const instance = component.root
    const rootElement = instance.find(element => element.type === 'div')
    expect(rootElement.children).toEqual(['0'])
  })
  test('when is clicked one time, text must be 1', () => {
    const component = TestRenderer.create(<Counter />)
    const testInstance = component.root
    let tree = component.toJSON()
    tree.props.onClick()
    const rootElement = testInstance.find(element => element.type === 'div')
    expect(rootElement.children).toEqual(['1'])
  })
})
