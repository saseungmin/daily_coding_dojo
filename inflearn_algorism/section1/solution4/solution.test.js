function solution(n) {
  // eslint-disable-next-line func-names
  return function (acc = 0) {
    if (n > 20) {
      return false;
    }

    if (n < 1) {
      return acc;
    }

    return solution(n - 1)(acc + n);
  };
}

describe('solution', () => {
  context('with over 20', () => {
    it('Should return false', () => {
      const result = solution(21)();

      expect(result).toBeFalsy();
    });
  });

  context('with under 20', () => {
    it('Should return correct answer', () => {
      expect(solution(6)()).toBe(21);
      expect(solution(10)()).toBe(55);
    });
  });
});
