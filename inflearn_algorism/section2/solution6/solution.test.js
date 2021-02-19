function solution(arr) {
  const { length } = arr;
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < length; i++) {
    const sum = [0, 0];
    for (let j = 0; j < length; j++) {
      sum[0] += arr[i][j];
      sum[1] += arr[j][i];
    }
    answer = Math.max(answer, ...sum);
  }

  const sum = [0, 0];
  for (let i = 0; i < length; i++) {
    sum[0] += arr[i][i];
    sum[1] += arr[i][length - 1 - i];
  }

  return Math.max(answer, ...sum);
}

describe('solution', () => {
  const arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ];
  it('The largest sum of each row, each column, and each diagonal is returned.', () => {
    expect(solution(arr)).toBe(155);
  });
});
