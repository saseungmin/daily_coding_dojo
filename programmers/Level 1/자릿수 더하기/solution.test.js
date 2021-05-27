function solution(n) {
  return n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
}

describe('자릿수 더하기', () => {
  it('solution', () => {
    expect(solution(123)).toBe(6);
  });
});
