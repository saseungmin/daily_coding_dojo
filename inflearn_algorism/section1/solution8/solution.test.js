/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  let answer = arr;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        // return arr.filter((dwarf) => dwarf !== arr[i] && dwarf !== arr[j]);
      }
    }
  }

  return answer;
}

describe('solution', () => {
  it('return seven dwarf', () => {
    expect(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])).toEqual([20, 7, 23, 19, 10, 8, 13]);
  });
});
