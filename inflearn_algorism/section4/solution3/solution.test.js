function solution(arr) {
  const testCaseLen = arr.length;
  const studentLen = arr[0].length;

  let result = 0;

  for (let i = 1; i <= studentLen; i++) {
    for (let j = 1; j <= studentLen; j++) {
      if (i === j) {
        // eslint-disable-next-line no-continue
        continue;
      }
      let count = 0;

      for (let k = 0; k < testCaseLen; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < studentLen; s++) {
          if (arr[k][s] === i) {
            pi = s;
          }

          if (arr[k][s] === j) {
            pj = s;
          }
        }

        if (pi < pj) {
          count += 1;
        }
      }

      if (count === testCaseLen) {
        result += 1;
      }
    }
  }

  return result;
}

describe('solution', () => {
  it('Return The number of cases that can be paired', () => {
    const arr = [
      [3, 4, 1, 2],
      [4, 3, 2, 1],
      [3, 1, 4, 2],
    ];

    expect(solution(arr)).toEqual(3); // 3,1 / 3,2 / 4,2
  });
});
