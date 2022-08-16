const isAnagram = require('./challenge-1');

test('"night" and "thing" are anagrams', () => {
    expect(isAnagram("night", "thing")).toBe(true);
})

test('"night" and "love" are not anagrams', () => {
    expect(isAnagram("night", "love")).toBe(false);
})

test('"night" and "night" are the same word, therefore are not anagrams', () => {
    expect(isAnagram("night", "night")).toBe(false);
})