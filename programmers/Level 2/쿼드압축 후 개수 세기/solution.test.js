/* eslint-disable no-restricted-syntax */
const initArray = (length) => Array.from({ length }, () => Array(length));

const isAllSameValue = (arr) => {
  const baseValue = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (baseValue !== arr[i][j]) {
        return false;
      }
    }
  }

  return true;
};

function solution(array) {
  let zeroCount = 0;
  let oneCount = 0;

  function recursive(arr) {
    const baseValue = arr[0][0];
    const { length } = arr;

    if (length === 1) {
      if (baseValue) {
        oneCount += 1;
      } else {
        zeroCount += 1;
      }
    } else if (isAllSameValue(arr)) {
      if (baseValue) {
        oneCount += 1;
      } else {
        zeroCount += 1;
      }
    } else {
      const lengthCompression = length / 2;
      const firstDivision = initArray(lengthCompression);
      const secondDivision = initArray(lengthCompression);
      const thirdDivision = initArray(lengthCompression);
      const fourthDivision = initArray(lengthCompression);

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          const target = arr[i][j];

          if (i < lengthCompression) {
            if (j < lengthCompression) {
              firstDivision[i][j] = target;
            } else {
              secondDivision[i][j - lengthCompression] = target;
            }
          } else if (j < lengthCompression) {
            thirdDivision[i - lengthCompression][j] = target;
          } else {
            fourthDivision[i - lengthCompression][j - lengthCompression] = target;
          }
        }
      }

      for (const compression of [firstDivision, secondDivision, thirdDivision, fourthDivision]) {
        recursive(compression);
      }
    }
  }

  recursive(array);

  return [zeroCount, oneCount];
}

describe('쿼드압축 후 개수 세기', () => {
  it('isAllSameValue', () => {
    expect(isAllSameValue([
      [1, 1],
      [1, 0],
    ])).toBeFalsy();

    expect(isAllSameValue([
      [1, 1],
      [1, 1],
    ])).toBeTruthy();
  });

  it('solution', () => {
    expect(solution(
      [
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
      ],
    )).toEqual([4, 9]);
  });
});
