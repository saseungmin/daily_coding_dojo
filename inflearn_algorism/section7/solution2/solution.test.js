/* eslint-disable no-param-reassign */
function solution(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

describe('solution', () => {
  it('버블정렬 사용하여 오름차순 정렬 후 반환한다.', () => {
    expect(solution([13, 5, 11, 7, 23, 15])).toEqual([5, 7, 11, 13, 15, 23]);
    expect(solution([7, 4, 5, 3, 1])).toEqual([1, 3, 4, 5, 7]);
  });
});
