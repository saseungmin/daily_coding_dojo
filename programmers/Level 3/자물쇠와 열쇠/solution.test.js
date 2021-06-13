const rotationKey = (key) => {
  const len = key.length;
  const rotatedArray = Array.from(Array(len), () => Array(len).fill(0));

  // 90도 회전
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      rotatedArray[i][j] = key[len - j - 1][i];
    }
  }

  return rotatedArray;
};

function solution(key, lock) {
  const answer = true;
  const len = lock.length;
  const arr = Array.from(Array(len * 3), () => Array(len * 3).fill(null));

  for (let i = len; i < len * 2; i++) {
    for (let j = len; j < len * 2; j++) {
      arr[i][j] = lock[i - len][j - len];
    }
  }

  return answer;
}

describe('자물쇠와 열쇠', () => {
  it('rotationKey', () => {
    expect(rotationKey([
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ])).toEqual([
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
    ]);
  });

  it('solution', () => {
    expect(solution(
      [[0, 0, 0], [1, 0, 0], [0, 1, 1]],
      [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
    )).toBeTruthy();
  });
});
