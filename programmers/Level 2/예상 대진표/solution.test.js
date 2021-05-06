/* eslint-disable no-param-reassign */
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer += 1;
  }

  return answer;
}

describe('예상 대진표', () => {
  it('solution', () => {
    expect(solution(8, 4, 7)).toBe(3);
  });
});
