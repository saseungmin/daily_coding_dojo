const isCheckNum = (num) => num > 100;

function solution(a, b, c) {
  const arr = [a, b, c];

  if (arr.findIndex(isCheckNum) !== -1) {
    return false;
  }

  return Math.min(...arr);
}

describe('solution', () => {
  it('When the given value is over 100 should return false', () => {
    const result = solution(1000, 6, 5);

    expect(result).toBeFalsy();
  });

  it('Should return Smallest value', () => {
    expect(solution(6, 5, 9)).toBe(5);
    expect(solution(6, 3, 9)).toBe(3);
    expect(solution(1, 3, 9)).toBe(1);
    expect(solution(29, 16, 77)).toBe(16);
    expect(solution(12, 59, 99)).toBe(12);
  });
});
