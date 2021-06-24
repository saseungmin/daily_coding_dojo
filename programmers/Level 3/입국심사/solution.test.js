function solution(n, times) {
  times.sort((a, b) => a - b);

  let answer = Number.MAX_SAFE_INTEGER;
  let smallest = 1;
  let largest = n * times[times.length - 1];

  while (smallest <= largest) {
    const mid = Math.floor((smallest + largest) / 2);
    let count = 0;

    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]);

      if (count >= n) {
        answer = Math.min(mid, answer);
        break;
      }
    }

    if (count >= n) {
      largest = mid - 1;
    } else {
      smallest = mid + 1;
    }
  }
  return answer;
}

describe('입국심사', () => {
  it('solution', () => {
    expect(solution(6, [7, 10])).toBe(28);
  });
});
