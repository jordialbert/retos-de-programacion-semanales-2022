const isPrimeNumber = require('./challenge-3')

test('Should return true when number is Prime Number', () => {
    expect(isPrimeNumber(7)).toBe(true)
    expect(isPrimeNumber(11)).toBe(true)
    expect(isPrimeNumber(37)).toBe(true)
})

test('Should return false when number is not Prime Number', () => {
    expect(isPrimeNumber(8)).toBe(false)
    expect(isPrimeNumber(20)).toBe(false)
    expect(isPrimeNumber(55)).toBe(false)
})
