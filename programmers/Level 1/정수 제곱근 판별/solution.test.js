function solution(n) {
  const sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) ** 2;
  }

  return -1;
}

describe('정수 제곱근 판별', () => {
  it('solution', () => {
    expect(solution(121)).toBe(144);
    expect(solution(3)).toBe(-1);
  });
});
