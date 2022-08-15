const fizzbuzz = require('./challenge-0');

test('returns 1 for the number 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('returns 7 for the number 7', () => {
    expect(fizzbuzz(7)).toBe(7);
});

test('returns "Fizz" for the number 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
});

test('returns "Fizz" for the number 27', () => {
    expect(fizzbuzz(27)).toBe("Fizz");
});

test('returns "Buzz" for the number 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
});

test('returns "Buzz" for the number 10', () => {
    expect(fizzbuzz(10)).toBe("Buzz");
});

test('returns "FizzBuzz" for the number 15', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
});
