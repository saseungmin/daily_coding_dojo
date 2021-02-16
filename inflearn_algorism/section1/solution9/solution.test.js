function solution(str) {
  const regex = /A/ig;

  return str.replace(regex, '#');
}

describe('solution', () => {
  it('should Change A to #', () => {
    expect(solution('BANANA')).toBe('B#N#N#');
  });
});
