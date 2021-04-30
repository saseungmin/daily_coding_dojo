const baseConversion = (n, base) => {
  let number = n;
  const result = [];

  while (number !== 0) {
    result.unshift(number % base);
    number = Math.floor(number / base);
  }

  return result.join('');
};

const reverseNumber = (base) => base.split('').reverse().join('');

function solution(n) {
  return parseInt(reverseNumber(baseConversion(n, 3)), 3);
}

describe('n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return', () => {
  it('10진법을 N 진법으로 변환한다', () => {
    expect(baseConversion(45, 3)).toBe('1200');
    expect(baseConversion(125, 3)).toBe('11122');
    expect(baseConversion(45, 2)).toBe('101101');
    expect(baseConversion(45, 5)).toBe('140');
  });

  it('앞뒤를 반전 시킨 후 반환한다.', () => {
    expect(reverseNumber('1200')).toBe('0021');
    expect(reverseNumber('11122')).toBe('22111');
  });

  it('solution', () => {
    expect(solution(45)).toBe(7);
    expect(solution(125)).toBe(229);
  });
});
