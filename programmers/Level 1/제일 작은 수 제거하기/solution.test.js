function solution(arr) {
  const min = Math.min(...arr);

  const filteredArr = arr.filter((v) => v !== min);

  return filteredArr.length ? filteredArr : [-1];
}

describe('제일 작은 수 제거하기', () => {
  it('solution', () => {
    expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(solution([10])).toEqual([-1]);
  });
});
