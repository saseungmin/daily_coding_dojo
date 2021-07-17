/* eslint-disable no-param-reassign */
function minimumSwaps(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      result += 1;
    }
  }

  return result;
}

describe('minimumSwaps', () => {
  it('minimumSwaps', () => {
    expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
  });
});
