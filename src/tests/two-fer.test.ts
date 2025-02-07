import { describe, it, expect, xit } from '@jest/globals'
import { twoFer } from '../exercises/two-fer'

describe('TwoFer', () => {
  it('no name given', () => {
    const expected = 'One for you, one for me.'
    expect(twoFer()).toEqual(expected)
  })

  xit('a name given', () => {
    const expected = 'One for Ouma, one for me.'
    expect(twoFer('Ouma')).toEqual(expected)
  })

  xit('another name given', () => {
    const expected = 'One for Bob, one for me.'
    expect(twoFer('Bob')).toEqual(expected)
  })
})