/* eslint-disable no-param-reassign */
function solution(n, works) {
  if (works.reduce((cal, work) => cal + work) <= n) {
    return 0;
  }

  works.sort((a, b) => b - a);

  while (n > 0) {
    const max = works[0];

    for (let i = 0; i < works.length; i++) {
      if (max <= works[i]) {
        works[i] -= 1;
        n -= 1;
      }

      if (!n) {
        break;
      }
    }
  }

  return works.reduce((cal, work) => cal + work ** 2, 0);
}
describe('야근 지수', () => {
  it('solution', () => {
    expect(solution(4, [4, 3, 3])).toBe(12);
    expect(solution(1, [2, 1, 2])).toBe(6);
    expect(solution(3, [1, 1])).toBe(0);
  });
});
