const sortNum = (x, y) => y - x;
const isCheckNum = (num) => num > 100;
const findOverNum = (arr) => arr.findIndex(isCheckNum) !== -1;
const checkTriangleSum = (arr) => arr[0] - (arr[1] + arr[2]) >= 0;

function solution(a, b, c) {
  const arr = [a, b, c].sort(sortNum);

  if (findOverNum(arr)) {
    return false;
  }

  if (checkTriangleSum(arr)) {
    return 'NO';
  }

  return 'YES';
}

describe('solution', () => {
  context("isn't Correct", () => {
    it('When the given value is over 100 should return false', () => {
      const result = solution(1000, 6, 5);

      expect(result).toBeFalsy();
    });

    it('When the sum of two smaller sides is less than or equal to the sum of the larger sides', () => {
      expect(solution(3, 1, 2)).toBe('NO');
      expect(solution(22, 1, 4)).toBe('NO');
      expect(solution(13, 33, 17)).toBe('NO');
    });
  });

  context('is Correct', () => {
    it('When you can make a triangle return "YES"', () => {
      expect(solution(6, 7, 11)).toBe('YES');
      expect(solution(13, 12, 11)).toBe('YES');
      expect(solution(5, 4, 2)).toBe('YES');
    });
  });
});
