function solution(brackets) {
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    const str = brackets[i];

    if (str === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(str);
    }
  }

  return stack.join('');
}

describe('solution', () => {
  it('소괄호 사이에 존재하는 문자 제거 후 남은 문자 출력', () => {
    expect(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')).toBe('EFLM');
  });
});
