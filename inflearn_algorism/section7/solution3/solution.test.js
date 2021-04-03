// function solution(arr) {
//   const negative = arr.filter((value) => value < 0);
//   const positive = arr.filter((value) => value > 0);

//   return [
//     ...negative,
//     ...positive,
//   ];
// }

/* eslint-disable no-param-reassign */
function solution(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

describe('solution', () => {
  it('음의 정수는 앞쪽, 양의 정수는 뒷쪽으로 정렬', () => {
    expect(solution([1, 2, 3, -3, -2, 5, 6, -6])).toEqual([-3, -2, -6, 1, 2, 3, 5, 6]);
  });
});
