const isCheckNum = (num) => num > 100;
const findOverNum = (arr) => arr.findIndex(isCheckNum) !== -1;
const oddSumMin = (pre, cur) => {
  if (cur % 2 !== 0) {
    return [pre[0] + cur, pre[1] > cur ? cur : pre[1]];
  }

  return pre;
};

function solution(arr) {
  if (findOverNum(arr)) {
    return false;
  }

  return arr.reduce(oddSumMin, [0, 100]);
}

describe('solution', () => {
  context('with fail', () => {
    it('given value over 100', () => {
      expect(solution([12, 77, 101, 41, 53, 92, 85])).toBeFalsy();
    });
  });

  context('with success', () => {
    const arr = [12, 77, 38, 41, 53, 92, 85];
    it('returns Sum of odd numbers and smallest odd number', () => {
      expect(solution(arr)).toEqual([256, 41]);
    });
  });
});
