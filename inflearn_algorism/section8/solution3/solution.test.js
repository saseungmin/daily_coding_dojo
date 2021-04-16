function solution(N) {
  const result = [];

  function dfs(V) {
    if (V > N) {
      return;
    }

    // result.push(V); // 전위
    dfs(V * 2);
    // result.push(V); // 중위
    dfs(V * 2 + 1);
    result.push(V); // 후위
  }

  dfs(1);
  return result;
}

describe('solution', () => {
  // it('재귀함수를 사용하여 전위순회를 반환한다.', () => {
  //   expect(solution(7)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  // });

  // it('재귀함수를 사용하여 중위순회 반환한다.', () => {
  //   expect(solution(7)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  // });

  it('재귀함수를 사용하여 후위순회 반환한다.', () => {
    expect(solution(7)).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
});
