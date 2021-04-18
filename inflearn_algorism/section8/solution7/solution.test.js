function solution(limitedTime, scores, times) {
  const len = scores.length;
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum, accTime) {
    if (limitedTime < accTime) {
      return;
    }

    if (level === len) {
      max = Math.max(max, sum);
      return;
    }

    dfs(level + 1, sum + scores[level], accTime + times[level]);
    dfs(level + 1, sum, accTime);
  }

  dfs(0, 0, 0);

  return max;
}

describe('solution', () => {
  const score = [10, 25, 15, 6, 7];
  const time = [5, 12, 8, 3, 4];

  it('트럭에 태울 수 있는 가장 무거운 무게를 반환한다.', () => {
    expect(solution(20, score, time)).toBe(41);
  });
});
