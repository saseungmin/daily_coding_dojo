/* eslint-disable camelcase */
const sortDesc = (arr) => arr.sort((a, b) => b - a);

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const sortedLottos = sortDesc(lottos);

  let tempNumber = [...win_nums];
  let count = 0;

  sortedLottos.forEach((lotto) => {
    if (lotto === 0) {
      return;
    }

    if (tempNumber.includes(lotto)) {
      const newNumber = tempNumber.filter((num) => num !== lotto);

      count += 1;
      tempNumber = newNumber;
    }
  });

  const zero = sortedLottos.filter((lotto) => lotto === 0);

  return [rank[count + zero.length], rank[count]];
}

describe('로또의 당첨 가능항 최고 순위와 최저 순위를 구하라', () => {
  it('Should be sort by desc', () => {
    expect(sortDesc([44, 1, 0, 0, 31, 25])).toEqual([44, 31, 25, 1, 0, 0]);
    expect(sortDesc([31, 10, 45, 1, 6, 19])).toEqual([45, 31, 19, 10, 6, 1]);
  });

  it('최고 순위와 최저 순위가 배열로 반환된다.', () => {
    expect(solution(
      [44, 1, 0, 0, 31, 25],
      [31, 10, 45, 1, 6, 19],
    )).toEqual([3, 5]);

    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).toEqual([1, 6]);
    expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toEqual([1, 1]);
  });
});
