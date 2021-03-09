function solution(M, arr) {
  let aP = 0;
  let sum = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > M) {
      sum -= arr[aP];
      aP += 1;
    }

    result += (i - aP + 1);
  }

  return result;
}

describe('solution', () => {
  it('M 이하가 되는 연속부분수열의 합의 개수', () => {
    expect(solution(5, [1, 3, 1, 2, 3])).toBe(10);
  });
});
