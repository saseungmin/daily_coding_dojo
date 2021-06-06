function solution(number) {
  let count = 0;

  if (number <= 0) {
    return 0;
  }

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }

  return count;
}

describe('solution', () => {
  it('Basic tests', () => {
    expect(solution(10)).toBe(23);
  });
});
