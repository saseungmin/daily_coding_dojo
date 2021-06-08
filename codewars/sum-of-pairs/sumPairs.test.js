// function sumPairs(ints, s) {
//   let arr = [];
//   let diff = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < ints.length - 1; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if (s === (ints[i] + ints[j])) {
//         if (diff > (j - i)) {
//           arr = [ints[i], ints[j]];
//           diff = j - i;
//         }
//       }
//     }
//   }

//   if (!arr.length) {
//     return undefined;
//   }

//   return arr;
// }

function sumPairs(ints, s) {
  if (ints.length < 2) {
    return undefined;
  }

  const set = new Set();
  set.add(ints[0]);

  for (let i = 1; i < ints.length; i++) {
    const target = s - ints[i];

    if (set.has(target)) {
      return [target, ints[i]];
    }

    set.add(ints[i]);
  }

  return undefined;
}

describe('sumPairs', () => {
  it('Basic tests', () => {
    expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7]);
  });
});
