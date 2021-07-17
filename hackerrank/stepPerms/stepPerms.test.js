// function stepPerms(n) {
//   // Write your code here
//   let answer = 0;

//   function dfs(level) {
//     if (level === n) {
//       answer += 1;
//       return;
//     }

//     if (level > n) {
//       return;
//     }

//     [level + 1, level + 2, level + 3].forEach((value) => {
//       dfs(value);
//     });
//   }

//   dfs(0, 0);

//   return answer;
// }

function stepPerms(n) {
  // Write your code here
  const dp = Array.from({ length: n }, () => 0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

describe('stepPerms', () => {
  it('stepPerms', () => {
    expect(stepPerms(7)).toBe(44);
  });
});
