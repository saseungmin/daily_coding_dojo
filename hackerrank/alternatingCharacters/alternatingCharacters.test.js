function alternatingCharacters(s) {
  let count = 0;
  let temp = s[0];

  for (let i = 1; i < s.length; i++) {
    if (temp === s[i]) {
      count += 1;
    } else {
      temp = s[i];
    }
  }

  return count;
}

describe('alternatingCharacters', () => {
  it('alternatingCharacters', () => {
    expect(alternatingCharacters('AAAA')).toBe(3);
    expect(alternatingCharacters('BBBBB')).toBe(4);
    expect(alternatingCharacters('ABABABAB')).toBe(0);
    expect(alternatingCharacters('AAABBB')).toBe(4);
  });
});
