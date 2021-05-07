// function solution(n) {
//   const check = Array.from({ length: 100001 }, () => 0);

//   function fibo(num) {
//     if (check[num] !== 0) {
//       return check[num];
//     }

//     if (num === 0) {
//       return 0;
//     }

//     if (num === 1) {
//       return 1;
//     }

//     const sum = (fibo(num - 2) % 1234567) + (fibo(num - 1) % 1234567);

//     check[num] = sum;

//     return sum;
//   }

//   return fibo(n) % 1234567;
// }

function solution(n) {
  const fibo = [0, 1];

  if (n < 2) {
    return fibo[n];
  }

  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 2] + fibo[i - 1]) % 1234567);
  }

  return fibo[n];
}

describe('피보나치 수', () => {
  it('solution', () => {
    expect(solution(3)).toBe(2);
    expect(solution(5)).toBe(5);
  });
});
