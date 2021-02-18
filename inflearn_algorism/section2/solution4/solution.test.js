const sumCorrectAnswer = (pre, cur) => {
  if (cur !== 0) {
    const count = pre.count + 1;

    return {
      count,
      sum: pre.sum + count,
    };
  }

  return {
    ...pre,
    count: 0,
  };
};

function solution(arr) {
  // let count = 0;

  // const resultArr = arr.map((value) => {
  //   if (value !== 0) {
  //     count += 1;

  //     return count;
  //   }

  //   count = 0;
  //   return count;
  // });

  const { sum } = arr.reduce(sumCorrectAnswer, { count: 0, sum: 0 });

  return sum;
  // return resultArr.reduce((a, b) => a + b, 0);
}

describe('solution', () => {
  it('OX Quiz', () => {
    expect(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(10);
  });
});
