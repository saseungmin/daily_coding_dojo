// function solution(a, b) {
//   return [...a, ...b].sort((x, y) => x - y);
// }

function solution(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  const result = [];

  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < aLen && bPointer < bLen) {
    if (a[aPointer] <= b[bPointer]) {
      result.push(a[aPointer]);

      aPointer += 1;
    }

    if (a[aPointer] > b[bPointer]) {
      result.push(b[bPointer]);

      bPointer += 1;
    }
  }

  while (aPointer < aLen) {
    result.push(a[aPointer]);

    aPointer += 1;
  }

  while (bPointer < bLen) {
    result.push(b[bPointer]);

    bPointer += 1;
  }

  return result;
}

describe('solution', () => {
  it('Returns the sum of two arrays in ascending order', () => {
    expect(solution([1, 3, 5], [2, 3, 6, 7, 9])).toEqual([1, 2, 3, 3, 5, 6, 7, 9]);
  });
});
