function solution(s) {
  let answer = 0;
  const test = [];
  const result = s.split('');

  const start = result.shift();
  test.push(start);

  while (result.length > 0) {
    const t = result.shift();

    if (!test.length || test[test.length - 1] === t) {
      test.push(t);
    } else {
      test.pop();

      if (test.length === 0) {
        answer += 1;
      }
    }
  }

  if (test.length) {
    return answer + 1;
  }

  return answer;
}

describe('문자열 나누기', () => {
  it('solution 1', () => {
    const result = solution('banana');

    expect(result).toBe(3);
  });

  it('solution 2', () => {
    const result = solution('abracadabra');

    expect(result).toBe(6);
  });

  it('solution 3', () => {
    const result = solution('aaabbaccccabba');

    expect(result).toBe(3);
  });
});
