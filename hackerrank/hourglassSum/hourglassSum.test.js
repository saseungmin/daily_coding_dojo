function hourglassSum(arr) {
  // Write your code here
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      let sum = 0;
      const hourglass = [[-1, -1], [-1, 0], [-1, 1], [0, 0], [1, -1], [1, 0], [1, 1]];

      hourglass.forEach(([x, y]) => {
        sum += arr[i + x][j + y];
      });

      max = Math.max(sum, max);
    }
  }

  return max;
}

describe('hourglassSum', () => {
  const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];

  it('hourglassSum', () => {
    expect(hourglassSum(arr)).toBe(19);
  });
});
