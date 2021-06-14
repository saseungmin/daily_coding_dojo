function solution(arr1, arr2) {
  return Array(arr1.length).fill()
    .map((r, i) => Array(arr2[0].length).fill()
      .map((v, j) => arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0)));
}

// function solution(arr1, arr2) {
//   const answer = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const temp = [];

//     for (let k = 0; k < arr2[0].length; k++) {
//       let sum = 0;

//       for (let j = 0; j < arr2.length; j++) {
//         sum += arr1[i][j] * arr2[j][k];
//       }

//       temp.push(sum);
//     }

//     answer.push(temp);
//   }

//   return answer;
// }

describe('행렬의 곱셈', () => {
  it('solution', () => {
    expect(solution(
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ],
      [
        [3, 3],
        [3, 3],
      ],
    ))
      .toEqual([[15, 15], [15, 15], [15, 15]]);
  });
});
