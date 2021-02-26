const ascSort = (a, b) => (a[0] + a[1]) - (b[0] + b[1]);

function solution(m, arr) {
  arr.sort(ascSort);

  let result = 0;

  arr.forEach((price, i) => {
    let leftMoney = m - (price[0] / 2) + price[1];
    let count = 1;

    arr.forEach((target, j) => {
      const targetMoney = target[0] + target[1];

      if (i !== j && targetMoney > leftMoney) {
        return;
      }

      if (i !== j && targetMoney <= leftMoney) {
        leftMoney -= targetMoney;
        count += 1;
      }
    });

    result = Math.max(result, count);
  });

  return result;
}

describe('solution', () => {
  it('Maximum number of students that can be gifted on a budget', () => {
    const arr = [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ];

    expect(solution(28, arr)).toEqual(4);
  });
});
