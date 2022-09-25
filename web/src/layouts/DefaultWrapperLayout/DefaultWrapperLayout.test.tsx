import { render } from '@redwoodjs/testing/web'

import DefaultWrapperLayout from './DefaultWrapperLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DefaultWrapperLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DefaultWrapperLayout />)
    }).not.toThrow()
  })
})
