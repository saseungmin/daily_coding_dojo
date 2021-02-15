function solution(n) {
  if (n > 1000) {
    return false;
  }

  return Math.ceil(n / 12);
}

describe('solution', () => {
  context('with over 1000', () => {
    it('Should return false', () => {
      const result = solution(1001);

      expect(result).toBeFalsy();
    });
  });

  context('with under 1000', () => {
    it('Should return correct answer', () => {
      expect(solution(25)).toBe(3);
      expect(solution(178)).toBe(15);
    });
  });
});
