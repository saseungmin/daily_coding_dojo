const calculate = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};

function solution(postfix) {
  const stack = [];

  for (let i = 0; i < postfix.length; i++) {
    const value = postfix[i];

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      stack.push(calculate[value](operand2, operand1));
    } else {
      stack.push(Number(value));
    }
  }

  return stack[0];
}

describe('solution', () => {
  const postfix = '352+*9-';
  it('후위연산식을 계산한 결과를 반환한다.', () => {
    expect(solution(postfix)).toBe(12);
  });
});
