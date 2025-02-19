import { describe, it, expect, xit } from '@jest/globals'
import { answer } from '../exercises/wordy'
describe('Wordy', () => {
  it('just a number', () => {
    expect(answer('What is 5?')).toEqual(5)
  })
  xit('addition', () => {
    expect(answer('What is 1 plus 1?')).toEqual(2)
  })
  xit('more addition', () => {
    expect(answer('What is 53 plus 2?')).toEqual(55)
  })
  xit('addition with negative numbers', () => {
    expect(answer('What is -1 plus -10?')).toEqual(-11)
  })
  xit('large addition', () => {
    expect(answer('What is 123 plus 45678?')).toEqual(45801)
  })
  xit('subtraction', () => {
    expect(answer('What is 4 minus -12?')).toEqual(16)
  })
  xit('multiplication', () => {
    expect(answer('What is -3 multiplied by 25?')).toEqual(-75)
  })
  xit('division', () => {
    expect(answer('What is 33 divided by -3?')).toEqual(-11)
  })
  xit('multiple additions', () => {
    expect(answer('What is 1 plus 1 plus 1?')).toEqual(3)
  })
  xit('addition and subtraction', () => {
    expect(answer('What is 1 plus 5 minus -2?')).toEqual(8)
  })
  xit('multiple subtraction', () => {
    expect(answer('What is 20 minus 4 minus 13?')).toEqual(3)
  })
  xit('subtraction then addition', () => {
    expect(answer('What is 17 minus 6 plus 3?')).toEqual(14)
  })
  xit('multiple multiplication', () => {
    expect(answer('What is 2 multiplied by -2 multiplied by 3?')).toEqual(-12)
  })
  xit('addition and multiplication', () => {
    expect(answer('What is -3 plus 7 multiplied by -2?')).toEqual(-8)
  })
  xit('multiple division', () => {
    expect(answer('What is -12 divided by 2 divided by -3?')).toEqual(2)
  })
  xit('unknown operation', () => {
    expect(() => answer('What is 52 cubed?')).toThrow(
      new Error('Unknown operation')
    )
  })
  xit('Non math question', () => {
    expect(() => answer('Who is the President of the United States?')).toThrow(
      new Error('Unknown operation')
    )
  })
  xit('reject problem missing an operand', () => {
    expect(() => answer('What is 1 plus?')).toThrow(new Error('Syntax error'))
  })
  xit('reject problem with no operands or operators', () => {
    expect(() => answer('What is?')).toThrow(new Error('Syntax error'))
  })
  xit('reject two operations in a row', () => {
    expect(() => answer('What is 1 plus plus 2?')).toThrow(
      new Error('Syntax error')
    )
  })
  xit('reject two numbers in a row', () => {
    expect(() => answer('What is 1 plus 2 1?')).toThrow(
      new Error('Syntax error')
    )
  })
  xit('reject postfix notation', () => {
    expect(() => answer('What is 1 2 plus?')).toThrow(new Error('Syntax error'))
  })
  xit('reject prefix notation', () => {
    expect(() => answer('What is plus 1 2?')).toThrow(new Error('Syntax error'))
  })
})

