function solution(N) {
  function convert(target, result) {
    if (target === 0) {
      return result;
    }

    return convert(parseInt(target / 2, 10), String((target % 2) + result));
  }

  return convert(N, '');
}

describe('solution', () => {
  it('재귀함수를 사용하여 10진수를 2진수로 변환 후 반환한다.', () => {
    expect(solution(11)).toBe('1011');
  });
});
