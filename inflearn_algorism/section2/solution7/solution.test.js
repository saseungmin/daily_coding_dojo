const isDefinedLocation = (locate, i, j) => (target) => {
  if (target === 0) {
    return (locate[0] + i < 0 || locate[1] + j < 0);
  }

  return (locate[0] + i >= target || locate[1] + j >= target);
};

const locationCheckIterator = (arr, i, j) => {
  const now = arr[i][j];
  let count = 0;

  const locations = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  locations.forEach((locate) => {
    const check = isDefinedLocation(locate, i, j);

    if (check(0) || check(arr.length) || now > arr[locate[0] + i][locate[1] + j]) {
      count += 1;
    }
  });

  if (count === 4) {
    return 1;
  }

  return 0;
};

const iteratorFor = (arr, i) => {
  let sum = 0;

  for (let j = 0; j < arr.length; j++) {
    sum += locationCheckIterator(arr, i, j);
  }

  return sum;
};

function solution(arr) {
  let answer = 0;

  arr.forEach((_, index) => {
    answer += iteratorFor(arr, index);
  });

  return answer;
}

describe('solution', () => {
  const arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  it('The number of cases where you are a number greater than the number of top, bottom, left, right', () => {
    expect(solution(arr)).toBe(10);
  });
});

describe('iteratorFor', () => {
  const arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  it('check location is sum', () => {
    expect(iteratorFor(arr, 3)).toBe(1);
  });
});

describe('isDefinedLocation', () => {
  const locate = [1, 0];
  const check = isDefinedLocation(locate, 1, 1);

  it('target is 0', () => {
    expect(check(0)).toBeFalsy();
  });
  it('target is 0', () => {
    expect(check(5)).toBeFalsy();
  });
});

describe('locationCheckIterator', () => {
  const arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ];
  it('should count 4 and then, return 1', () => {
    expect(locationCheckIterator(arr, 0, 2)).toBe(1);
  });

  it('should count is not 4 and then, return 0', () => {
    expect(locationCheckIterator(arr, 0, 3)).toBe(0);
  });
});
