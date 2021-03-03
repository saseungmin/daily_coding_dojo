// function solution(a, b) {
//   const result = new Set();

//   a.forEach((value) => {
//     b.forEach((target) => {
//       if (value === target) {
//         result.add(value);
//       }
//     });
//   });

//   return [...result].sort((x, y) => x - y);
// }

const sort = (arr) => arr.sort((x, y) => x - y);

function solution(a, b) {
  const arrA = sort(a);
  const arrB = sort(b);

  let aP = 0;
  let bP = 0;

  const result = [];

  while (aP < a.length && bP < b.length) {
    const A = arrA[aP];
    const B = arrB[bP];

    if (A === B) {
      result.push(A);

      aP += 1;
      bP += 1;
    }

    if (A < B) {
      aP += 1;
    }

    if (A > B) {
      bP += 1;
    }
  }

  return result;
}

describe('solution', () => {
  it('Returns the sum of two arrays in common element ascending order', () => {
    expect(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])).toEqual([2, 3, 5]);
  });
});
