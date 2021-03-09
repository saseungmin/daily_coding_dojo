// function solution(M, arr) {
//   let result = Number.MIN_SAFE_INTEGER;

//   arr.forEach((_, index) => {
//     const lastIndex = M + index;
//     let sum = 0;
//     if (lastIndex <= arr.length) {
//       for (let i = index; i < lastIndex; i++) {
//         sum += arr[i];
//       }

//       if (result < sum) {
//         result = sum;
//       }
//     }
//   });
//   return result;
// }

function solution(K, arr) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }

  for (let i = K; i < arr.length; i++) {
    sum += (arr[i] - arr[i - K]);
    result = Math.max(sum, result);
  }

  return result;
}

describe('solution', () => {
  it('K일 동안의 최대 매출액', () => {
    expect(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])).toBe(56);
  });
});
