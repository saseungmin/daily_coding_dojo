function solution(weight, dogs) {
  const len = dogs.length;
  let max = Number.MIN_SAFE_INTEGER;

  function dfs(level, sum) {
    if (weight < sum) {
      return;
    }

    if (level === len) {
      max = Math.max(max, sum);
      return;
    }

    dfs(level + 1, sum + dogs[level]);
    dfs(level + 1, sum);
  }

  dfs(0, 0);

  return max;
}

describe('solution', () => {
  it('트럭에 태울 수 있는 가장 무거운 무게를 반환한다.', () => {
    expect(solution(259, [81, 58, 42, 33, 61])).toBe(242);
  });
});
