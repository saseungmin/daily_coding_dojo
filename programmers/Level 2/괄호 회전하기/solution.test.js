function solution(s) {
  let answer = 0;
  let count = 0;

  const brackets = s.split('');

  while (s.length > count) {
    const stack = [];

    for (let i = 0; i < brackets.length; i++) {
      if (
        (stack[stack.length - 1] === '(' && brackets[i] === ')')
        || (stack[stack.length - 1] === '{' && brackets[i] === '}')
        || (stack[stack.length - 1] === '[' && brackets[i] === ']')
      ) {
        stack.pop();
      } else {
        stack.push(brackets[i]);
      }
    }

    if (!stack.length) {
      answer += 1;
    }

    brackets.push(brackets.shift());
    count += 1;
  }

  return answer;
}

describe('올바른 괄호 문자열이 되게 하는 x의 개수를 return', () => {
  it('solution', () => {
    expect(solution('[](){}')).toBe(3);
    expect(solution('}]()[{')).toBe(2);
    expect(solution('[)(]')).toBe(0);
    expect(solution('}}}')).toBe(0);
  });
});
