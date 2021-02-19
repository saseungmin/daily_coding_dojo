/* eslint-disable no-plusplus */
function solution(arr) {
  const { length } = arr;
  const order = Array.from({ length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i] < arr[j]) {
        order[i] += 1;
      }
    }
  }

  return order;
}

describe('solution', () => {
  it("Each student's rank is listed.", () => {
    expect(solution([84, 84, 90, 75, 100])).toEqual([3, 3, 2, 5, 1]);
    expect(solution([87, 89, 92, 100, 76])).toEqual([4, 3, 2, 1, 5]);
  });
});
