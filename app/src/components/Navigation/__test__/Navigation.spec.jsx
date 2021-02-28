import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { shape } from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'

import Navigation from '../index'

const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {}
  }
}

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) }
})

function mountWrap(node) {
  return mount(node, createContext())
}

let props, wrapper
const createProps = () => ({ session: { me: null } })
const createAuthProps = () => ({ session: { me: shape({}) } })

beforeEach(() => {
  props = createProps()
  wrapper = mountWrap(<Navigation {...props} />)
})

describe('<Navigation/>', () => {
  it('should render Navigation correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Navigation {...props} />
        </BrowserRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render Telus Logo tag', () => {
    expect(wrapper.find('svg').exists()).toBeTruthy()
  })

  it('should render List component', () => {
    expect(wrapper.find('List').exists()).toBeTruthy()
  })

  it('should render ListAuth component', () => {
    props = createAuthProps()
    wrapper = mountWrap(
      <MockedProvider>
        <Navigation {...props} />
      </MockedProvider>
    )
    expect(wrapper.find('ListAuth').exists()).toBeTruthy()
  })
})
