function solution(M, arr) {
  const len = arr.length;
  let aP = 0;
  let bP = 0;
  let sum = 0;
  let result = 0;

  while (aP < len) {
    sum += arr[bP];
    bP += 1;

    if (sum === M) {
      aP += 1;
      bP = aP;
      sum = 0;
      result += 1;
    }

    if (sum > M || bP === len) {
      aP += 1;
      bP = aP;
      sum = 0;
    }
  }

  return result;
}

describe('solution', () => {
  it('Returns the sum of two arrays in common element ascending order', () => {
    expect(solution(6, [1, 2, 1, 3, 1, 1, 1, 2])).toEqual(3);
    expect(solution(4, [1, 2, 1, 3, 1, 1, 1, 2])).toEqual(4);
  });
});
