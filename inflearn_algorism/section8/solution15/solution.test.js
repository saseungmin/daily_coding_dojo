function solution(arr, k, m) {
  let result = 0;

  function dfs(level, sum, start) {
    if (level === k && sum % m === 0) {
      result += 1;
      return;
    }

    for (let i = start; i < arr.length; i++) {
      dfs(level + 1, sum + arr[i], i + 1);
    }
  }

  dfs(0, 0, 0);

  return result;
}

describe('solution', () => {
  it('조합의 합이 6의 배수인 개수를 반환한다.', () => {
    expect(solution([2, 4, 5, 8, 12], 3, 6)).toBe(2);
  });
});
