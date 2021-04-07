function solution(M, arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  let start = 0;
  let end = sortedArr.length;
  let result = 0;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (sortedArr[middle] > M) {
      end = middle - 1;
    }

    if (sortedArr[middle] < M) {
      start = middle + 1;
    }

    if (sortedArr[middle] === M) {
      result = middle + 1;
      break;
    }
  }

  return result;
}

describe('solution', () => {
  it('이분검색으로 해당 값이 몇 번째 위치하는지 리턴한다.', () => {
    expect(solution(32, [23, 87, 65, 12, 57, 32, 99, 81])).toBe(3);
  });
});
