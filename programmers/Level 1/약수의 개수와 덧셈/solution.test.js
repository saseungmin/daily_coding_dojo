function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) { // 약수 구하기
        count += 1;
      }
    }

    if (count % 2 === 0) { // 약수의 개수가 짝수
      answer += i;// 더하기
    } else if (count % 2 !== 0) { // 약수의 개수가 홀수
      answer -= i; // 빼기
    }
  }

  return answer;
}

describe('solution', () => {
  it('solution', () => {
    expect(solution(3, 7)).toBe(17);
  });
});
