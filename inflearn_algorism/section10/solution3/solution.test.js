function solution(arr) {
  const dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        dy[i] = Math.max(dy[i], dy[j]);
      }
    }

    dy[i] += 1;
  }

  return Math.max(...dy);
}

// function solution(arr) {
//   const dy = Array.from({ length: arr.length }, () => 0);

//   dy[0] = 1;

//   for (let i = 1; i < arr.length; i++) {
//     let max = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[i] > arr[j] && dy[j] > max) {
//         max = dy[j];
//       }
//     }

//     dy[i] = max + 1;
//   }

//   console.log(dy);

//   return Math.max(...dy);
// }

describe('돌다리 건너기', () => {
  it('solution', () => {
    expect(solution([5, 3, 7, 8, 6, 2, 9, 4])).toBe(4);
    expect(solution([2, 7, 5, 8, 6, 4, 7, 12, 3])).toBe(5);
  });
});
