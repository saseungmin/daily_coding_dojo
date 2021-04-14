const countHorse = (stalls) => (middle) => {
  let count = 1;
  let target = stalls[0];

  stalls.forEach((stall) => {
    if (stall - target >= middle) {
      count += 1;
      target = stall;
    }
  });

  return count;
};

function solution(count, stalls) {
  stalls.sort((a, b) => a - b);

  let start = 1;
  let end = stalls[stalls.length - 1];
  let result = 0;

  const horses = countHorse(stalls);

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (horses(middle) < count) {
      end = middle - 1;
    }

    if (horses(middle) >= count) {
      result = middle;
      start = middle + 1;
    }
  }

  return result;
}

describe('solution', () => {
  it('가장 가까운 두 말의 최대 거리를 반환한다.', () => {
    expect(solution(3, [1, 2, 8, 4, 9])).toBe(3);
  });
});
