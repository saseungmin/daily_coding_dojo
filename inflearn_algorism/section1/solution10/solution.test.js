function solution(str, t) {
  const regex = new RegExp(t, 'ig');

  return str.match(regex).length;
}

describe('solution', () => {
  it('should match string Count', () => {
    expect(solution('COMPUTERPROGRAMMING', 'R')).toBe(3);
  });
});
