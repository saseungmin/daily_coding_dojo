function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let valley = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'U') {
      count += 1;
      if (count === 0) {
        valley += 1;
      }
    } else if (path[i] === 'D') {
      count -= 1;
    }
  }

  return valley;
}

describe('countingValleys', () => {
  it('countingValleys', () => {
    expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
  });
});
