function repeatedString(s, n) {
  // Write your code here
  let matchCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      matchCount += 1;
    }
  }

  let temp = 0;

  for (let i = 0; i < Math.floor(n % s.length); i++) {
    if (s[i] === 'a') {
      temp += 1;
    }
  }

  return Math.floor(n / s.length) * matchCount + temp;
}

describe('repeatedString', () => {
  it('repeatedString', () => {
    expect(repeatedString('aba', 10)).toBe(7);
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
  });
});
