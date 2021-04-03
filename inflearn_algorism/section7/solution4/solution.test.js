/* eslint-disable no-param-reassign */
function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    for (let j = i - 1; j > -1; j--) {
      if (key < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = key;
      } else break;
    }
  }

  return arr;
}

describe('solution', () => {
  it('삽입 정렬을 사용한 오름차순 정렬 후 반환한다.', () => {
    expect(solution([13, 5, 11, 7, 23, 15])).toEqual([5, 7, 11, 13, 15, 23]);
    expect(solution([7, 4, 5, 3, 1])).toEqual([1, 3, 4, 5, 7]);
    expect(solution([8, 5, 6, 2, 4])).toEqual([2, 4, 5, 6, 8]);
  });
});
