function solution(str) {
  const upperCase = str.toUpperCase();
  const reverseStr = upperCase
    .split('')
    .reverse()
    .join('');

  if (upperCase === reverseStr) {
    return 'YES';
  }

  return 'NO';
}

describe('solution', () => {
  it('Is palindrome string', () => {
    expect(solution('goooG')).toBe('YES');
    expect(solution('rotator')).toBe('YES');
    expect(solution('nursesrun')).toBe('YES');
  });

  it("Isn't palindrome string", () => {
    expect(solution('sky')).toBe('NO');
  });
});
