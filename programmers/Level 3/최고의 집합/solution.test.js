// const multiplyAll = (arr) => arr.reduce((cal, value) => cal * value, 1);

// function solution(n, s) {
//   let answer = [];
//   const set = new Set();
//   const temp = Array.from({ length: n }, () => 0);
//   let max = Number.MIN_SAFE_INTEGER;

//   function dfs(level, sum) {
//     if (level === n) {
//       if (sum === s) {
//         const result = [...temp.slice()].sort((a, b) => a - b);
//         const key = result.join('');

//         if (!set.has(key)) {
//           const multiply = multiplyAll(result);

//           if (max < multiply) {
//             max = multiply;
//             answer = result;
//           }

//           set.add(key);
//         }

//         return;
//       }

//       return;
//     }

//     for (let i = 1; i < s; i++) {
//       temp[level] = i;
//       dfs(level + 1, sum + i);
//     }
//   }

//   dfs(0, 0);

//   if (!answer.length) {
//     return [-1];
//   }

//   return answer;
// }

function solution(n, s) {
  if (n > s) {
    return [-1];
  }

  const mid = Math.floor(s / n);
  const answer = Array.from({ length: n }, () => mid);

  for (let i = 0; i < s % n; i++) {
    answer[answer.length - 1 - i] += 1;
  }

  return answer;
}

describe('최고의 집합', () => {
  it('solution', () => {
    expect(solution(2, 9)).toEqual([4, 5]);
  });
});
