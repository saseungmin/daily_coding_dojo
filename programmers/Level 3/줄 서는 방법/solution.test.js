// function solution(n, k) {
//   const answer = [];
//   const dp = Array.from({ length: n + 1 }, () => false);
//   const temp = Array.from({ length: n }, () => 0);

//   function dfs(level) {
//     if (answer.length === k) {
//       return;
//     }

//     if (level === n) {
//       answer.push(temp.slice());
//       return;
//     }

//     for (let i = 1; i <= n; i++) {
//       if (!dp[i]) {
//         dp[i] = true;
//         temp[level] = i;

//         dfs(level + 1);

//         dp[i] = false;
//       }
//     }
//   }

//   dfs(0);

//   return answer[k - 1];
// }

const factorial = (n) => {
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    sum *= i;
  }

  return sum;
};

function solution(n, k) {
  const answer = [];
  const people = Array.from({ length: n }, (_, i) => i + 1);
  let nk = k - 1;

  while (people.length) {
    if (nk === 0) {
      answer.push(...people);
      break;
    }

    const fac = factorial(people.length - 1);
    const index = Math.floor(nk / fac);

    nk %= fac;

    answer.push(people[index]);
    people.splice(index, 1);
  }

  return answer;
}

describe('줄 서는 방법', () => {
  it('factorial', () => {
    expect(factorial(5)).toBe(120);
  });

  it('solution', () => {
    expect(solution(3, 5)).toEqual([3, 1, 2]);
  });
});
