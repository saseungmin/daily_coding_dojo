function solution(bars) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];

    if (bar === '(') {
      stack.push(bar);
    } else {
      stack.pop();

      if (bars[i - 1] === '(') {
        count += stack.length;
      } else {
        count += 1;
      }
    }
  }

  return count;
}

describe('solution', () => {
  it('잘려진 쇠막대기 조각의 총 개수를 반환한다.', () => {
    expect(solution('()(((()())(())()))(())')).toBe(17);
    expect(solution('(((()(()()))(())()))(()())')).toBe(24);
  });
});
