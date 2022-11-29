import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adapter', () => {
  test('Should return fals if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_mail@mail.com')
    expect(isValid).toBe(false)
  })
})
