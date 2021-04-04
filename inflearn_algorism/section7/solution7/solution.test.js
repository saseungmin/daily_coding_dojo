const convert = (array) => Number(array.join(''));
const toAsc = (a, b) => convert(a) - convert(b);

function solution(locations) {
  return locations.sort(toAsc);
}

describe('solution', () => {
  it('좌표인 이 차원 배열을 정렬 후 반환한다.', () => {
    expect(solution([[0, 1], [0, 2], [1, 3], [1, 2], [2, 5], [3, 6]]))
      .toEqual([[0, 1], [0, 2], [1, 2], [1, 3], [2, 5], [3, 6]]);
  });
});
