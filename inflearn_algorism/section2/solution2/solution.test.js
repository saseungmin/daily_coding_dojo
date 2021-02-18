/* eslint-disable no-plusplus */
function solution(arr) {
  // arr.forEach((student) => {
  //   if (student > min) {
  //     min = student;
  //     count++;
  //   }
  // });

  const result = arr.reduce((pre, cur) => {
    if (cur > pre[0]) {
      return [cur, pre[1] + 1];
    }

    return pre;
  }, [0, 0]);

  return result[1];

  // return count;
}

describe('solution', () => {
  it('Should return only the number that is greater than the number in front of it', () => {
    expect(solution([130, 135, 148, 140, 145, 150, 150, 153])).toBe(5);
  });
});
