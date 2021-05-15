/* eslint-disable no-restricted-syntax */
/* eslint-disable no-mixed-operators */
// N은 1 이상 9 이하입니다.
// number는 1 이상 32,000 이하입니다.
// 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
// 최솟값이 8보다 크면 -1을 return 합니다.
const calculations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => Math.floor(x / y),
};

const calculate = (x, y) => {
  const operators = ['+', '-', '*', '/'];

  return operators.reduce((cal, operator) => {
    if (operator === '/' && !y) {
      return [...cal];
    }

    return [...cal, calculations[operator](x, y)];
  }, []);
};

function solution(N, number) {
  const dy = [new Set()];

  for (let i = 1; i <= 8; i++) {
    dy.push(new Set([Number(Array(i).fill(N).join(''))]));

    for (let j = 1; j <= i; j++) {
      dy[j].forEach((x) => {
        dy[i - j].forEach((y) => {
          calculate(x, y).forEach((value) => dy[i].add(value));
        });
      });
    }

    if (dy[i].has(number)) {
      return i;
    }
  }

  return -1;
}

describe('N으로 표현', () => {
  it('calculate', () => {
    expect(calculate(5, 5)).toEqual([10, 0, 25, 1]);
    expect(calculate(5, 0)).toEqual([5, 5, 0]);
  });

  it('calculations', () => {
    expect(calculations['+'](5, 5)).toBe(10);
    expect(calculations['-'](5, 5)).toBe(0);
    expect(calculations['/'](5, 5)).toBe(1);
    expect(calculations['*'](5, 5)).toBe(25);
  });

  it('solution', () => {
    expect(solution(5, 12)).toBe(4);
  });
});
