/* eslint-disable no-param-reassign */
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      n -= 1;
      answer += 1;
    } else {
      n /= 2;
    }
  }

  return answer;
}

// function solution(n) {
//   if (n === 1) return 1;
//   const nArr = Array.from(n.toString(2));
//   return nArr.reduce((a, b) => (+a) + (+b));
// }

describe('점프와 순간 이동', () => {
  it('solution', () => {
    expect(solution(5)).toBe(2);
    expect(solution(6)).toBe(2);
    expect(solution(5000)).toBe(5);
  });
});
