function solution(n) {
  return n.toString().split('').map((v) => Number(v)).reverse();
}

describe('자연수 뒤집어 배열로 만들기', () => {
  it('solution', () => {
    expect(solution(12345)).toEqual([5, 4, 3, 2, 1]);
  });
});
