function solution(arr) {
  const len = arr.length;
  const total = arr.reduce((acc, cur) => acc + cur);

  let result = 'NO';
  let flag = false;

  function dfs(level, sum) {
    if (flag) {
      return;
    }

    if (level === len) {
      if ((total - sum) === sum) {
        result = 'YES';
        flag = true;
        return;
      }

      return;
    }

    dfs(level + 1, sum + arr[level]);
    dfs(level + 1, sum);
  }

  dfs(0, 0);

  return result;
}

describe('solution', () => {
  it('두 부분집합의 합이 같은 값이 존재하면 YES를 반환한다.', () => {
    expect(solution([1, 3, 5, 6, 7, 10])).toBe('YES');
  });

  it('두 부분집합의 합이 같은 값이 없으면 NO를 반환한다.', () => {
    expect(solution([1, 3, 5, 6, 7, 11])).toBe('NO');
  });
});
