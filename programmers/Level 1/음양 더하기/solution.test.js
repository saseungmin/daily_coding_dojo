// function solution(absolutes, signs) {
//   return absolutes
//     .map((absolute, index) => (!signs[index] ? -absolute : absolute))
//     .reduce((acc, cur) => acc + cur);
// }

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
}
describe('정수 배열과 이 정수 배열의 부호를 담은 배열이 주어지고 실제 정수들의 합을 구한다.', () => {
  it('solution', () => {
    expect(solution([4, 7, 12], [true, false, true])).toBe(9);
    expect(solution([1, 2, 3], [false, false, true])).toBe(0);
  });
});
