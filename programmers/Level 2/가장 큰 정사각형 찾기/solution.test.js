/* eslint-disable no-param-reassign */
function solution(board) {
  let answer = 0;

  const xLen = board[0].length;
  const yLen = board.length;

  if (xLen < 2 || yLen < 2) {
    return 1;
  }

  for (let i = 1; i < yLen; i++) {
    for (let j = 1; j < xLen; j++) {
      if (board[i][j] > 0) {
        const min = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]);

        board[i][j] = min + 1;
      }

      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  return answer ** 2;
}

describe('가장 큰 정사각형 찾기', () => {
  const board = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ];

  it('solution', () => {
    expect(solution(board)).toBe(9);
    expect(solution([[0, 0, 1, 1], [1, 1, 1, 1]])).toBe(4);
  });
});
