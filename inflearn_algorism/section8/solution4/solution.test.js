function solution(N) {
  const result = [];
  const check = Array.from({ length: N + 1 }, () => 0);

  function dfs(v) {
    if (v === N + 1) {
      let temp = '';

      for (let i = 0; i < check.length; i++) {
        if (check[i] === 1) {
          temp += `${i} `;
        }
      }

      if (temp.length) {
        result.push(temp.trim());
      }

      return;
    }

    check[v] = 1;
    dfs(v + 1);
    check[v] = 0;
    dfs(v + 1);
  }

  dfs(1);

  return result;
}

describe('solution', () => {
  it('1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 반환한다.', () => {
    expect(solution(3)).toEqual(['1 2 3', '1 2', '1 3', '1', '2 3', '2', '3']);
    expect(solution(4)).toEqual(['1 2 3 4', '1 2 3', '1 2 4', '1 2', '1 3 4', '1 3', '1 4', '1', '2 3 4', '2 3', '2 4', '2', '3 4', '3', '4']);
  });
});
