function solution(brackets) {
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === '(') {
      stack.push(brackets[i]);
    }

    if (brackets[i] === ')' && !stack.length) {
      return 'NO';
    }

    if (brackets[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    }
  }

  if (stack.length > 0) {
    return 'NO';
  }

  return 'YES';
}

describe('solution', () => {
  it('올바른 괄호일 떄, YES를 반환한다.', () => {
    expect(solution('(()(()))(())')).toBe('YES');
  });

  it('올바르지 않은 괄호일 떄, NO를 반환한다.', () => {
    expect(solution('(()(()))(()))')).toBe('NO');
  });
});
