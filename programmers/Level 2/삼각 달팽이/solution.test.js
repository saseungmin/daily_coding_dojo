/* eslint-disable no-param-reassign */
function solution(n) {
  const answer = Array.from({ length: n }, (_, i) => Array(i + 1).fill(null));

  let x = -1;
  let y = 0;
  let count = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      x += 1;
      count += 1;

      answer[x][y] = count;
    }

    for (let i = 0; i < n - 1; i++) {
      y += 1;
      count += 1;

      answer[x][y] = count;
    }

    for (let i = 0; i < n - 2; i++) {
      x -= 1;
      y -= 1;
      count += 1;

      answer[x][y] = count;
    }

    n -= 3;
  }

  return answer.flat();
}

describe('삼각 달팽이', () => {
  it('solution', () => {
    expect(solution(6))
      .toEqual([1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]);
  });
});
