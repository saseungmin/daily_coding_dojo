// const ascSort = (a, b) => a - b;
const minNum = (pre, cur) => (pre > cur ? cur : pre);

function solution(arr) {
  // Math.min(...arr)
  // arr.sort(ascSort)[0]
  return arr.reduce(minNum);
}

describe('solution', () => {
  it('Should return smallest number', () => {
    expect(solution([5, 3, 7, 11, 2, 15, 17])).toBe(2);
  });
});
