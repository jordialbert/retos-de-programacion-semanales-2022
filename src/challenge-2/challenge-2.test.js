const fibonacci = require('./challenge-2')

test('The first 5 numbers of Fibonacci series should be printed', () => {
    expect(fibonacci(8)).toBe([0,1,1,2,3,5,8,13])
})