function solution(s) {
  const answer = [];
  const test = s.split('');

  for (let i = 0; i < test.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (test[j] === test[i] && j !== i) {
        answer.push(i - j);
        break;
      }
    }

    if (!answer[i]) {
      answer.push(-1);
    }
  }

  return answer;
}

describe('가장 가까운 같은 글자', () => {
  it('solution 1', () => {
    const result = solution('banana');

    expect(result).toEqual([-1, -1, -1, 2, 2, 2]);
  });

  it('solution 2', () => {
    const result = solution('foobar');

    expect(result).toEqual([-1, -1, 1, -1, -1, -1]);
  });
});
