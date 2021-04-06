const toAsc = (a, b) => {
  if (a[0] === b[0]) {
    return a[1].charCodeAt() - b[1].charCodeAt();
  }

  return a[0] - b[0];
};

function solution(times) {
  let result = 0;
  let count = 0;

  const timeLines = times.reduce((newTimes, time) => [
    ...newTimes,
    [time[0], 's'],
    [time[1], 'e'],
  ], []);

  timeLines.sort(toAsc).forEach((timeLine) => {
    if (timeLine[1] === 's') {
      count += 1;
      result = Math.max(count, result);
    }

    if (timeLine[1] === 'e') {
      count -= 1;
    }
  });

  return result;
}

describe('solution', () => {
  const times = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ];
  it('피로연장에 동시에 존재하는 최대 인원을 리턴한다', () => {
    expect(solution(times)).toBe(2);
  });
});
