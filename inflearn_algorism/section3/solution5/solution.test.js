function solution(str) {
  let count = 1;
  const newStr = `${str} `;
  let answer = '';

  for (let i = 0; i < newStr.length - 1; i++) {
    if (newStr[i] === newStr[i + 1]) {
      count += 1;
    }

    if (newStr[i] !== newStr[i + 1]) {
      answer += count > 1 ? newStr[i] + count : newStr[i];
      count = 1;
    }
  }

  return answer;
}

describe('solution', () => {
  it('Should Returns the shortest character distance', () => {
    expect(solution('KKHSSSSSSSE')).toBe('K2HS7E');
    expect(solution('KHSE')).toBe('KHSE');
  });
});
