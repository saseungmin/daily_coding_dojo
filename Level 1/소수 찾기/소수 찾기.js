// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
const result = solution(10);
console.log(result);

function solution(n) {
  const initCount = 2;
  let arr = [];
  for (let i = initCount; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = initCount; i <= n; i++) {
    if (arr[i] === 0) continue;

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter((val) => val !== 0).length;
}
