import { describe, it, expect } from '@jest/globals'
import { hello } from '../exercises/hello-world'
describe('Hello World', () => {
  it('says hello world', () => {
    expect(hello()).toEqual('Hello, World!')
  })
})