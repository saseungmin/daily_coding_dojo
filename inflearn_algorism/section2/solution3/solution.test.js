/* eslint-disable no-plusplus */
const isWin = (x, y) => ((x === 2 && y === 1) || (x === 3 && y === 2) || (x === 1 && y === 3));

const checkRSP = (a, b) => {
  if (isWin(a, b)) {
    return 'A';
  }

  if (isWin(b, a)) {
    return 'B';
  }

  return 'D';
};

function solution(a, b) {
  let str = '';

  for (let i = 0; i < a.length; i++) {
    str += `${checkRSP(a[i], b[i])}`;
  }

  return str;
}

describe('solution', () => {
  const a = [2, 3, 3, 1, 3];
  const b = [1, 1, 2, 2, 3];
  it('Rock Scissors Paper', () => {
    expect(solution(a, b)).toBe('ABABD');
  });
});

describe('checkRSP', () => {
  it('return A', () => {
    const result = checkRSP(2, 1);

    expect(result).toBe('A');
  });

  it('return A', () => {
    const result = checkRSP(3, 1);

    expect(result).toBe('B');
  });

  it('return D', () => {
    const result = checkRSP(3, 3);

    expect(result).toBe('D');
  });
});
