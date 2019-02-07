/* eslint-env jest */
import { shallow, mount } from 'enzyme'
import Counter from '../../../src/components/counter'

describe('Counter suite', () => {
  test('when is mounted display text 0', () => {
    const wrapper = mount(<Counter />)
    expect(wrapper.text()).toEqual('0')
  })

  test('when is clicked one time, text must be 1', () => {
    const wrapper = shallow(<Counter />)
    wrapper.simulate('click')
    expect(wrapper.text()).toEqual('1')
  })
})
