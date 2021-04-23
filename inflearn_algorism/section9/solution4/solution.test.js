function solution(n) {
  let result = '';
  const queue = [];

  queue.push(1);

  while (queue.length) {
    const v = queue.shift();

    if (v > n) {
      break;
    }

    result += `${v} `;
    queue.push(v * 2);
    queue.push(v * 2 + 1);
  }

  return result.trim();
}

describe('solution', () => {
  it('이진트리를 넓이우선탐색한 값을 반환한다.', () => {
    expect(solution(7)).toBe('1 2 3 4 5 6 7');
  });
});
