const fibonacci = require('./challenge-2')

test('Should return an array with the first 8 numbers of Fibonacci series', () => {
    const expected = [0,1,1,2,3,5,8,13]
    expect(fibonacci(8)).toEqual(expected)
})