function solution(str) {
  const regex = /[A-Z]/g;

  return str.match(regex).length;
}

describe('solution', () => {
  it('should uppercase count', () => {
    expect(solution('KoreaTimeGood')).toBe(3);
  });
});
