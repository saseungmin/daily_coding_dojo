function solution(str) {
  const { length } = str;

  if (length % 2 !== 0) {
    return str.substr(Math.floor(length / 2), 1);
  }

  return str.substr(length / 2 - 1, 2);
}

describe('solution', () => {
  context('When String length is odd', () => {
    it('should return middle string', () => {
      expect(solution('study')).toBe('u');
      expect(solution('package')).toBe('k');
    });
  });
  context('When String length is even', () => {
    it('should return two middle string', () => {
      expect(solution('good')).toBe('oo');
      expect(solution('solution')).toBe('ut');
    });
  });
});
