/* eslint-disable no-param-reassign */
function solution(board) {
  let result = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const len = board.length;

  function dfs(x, y) {
    board[x][y] = 0;

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < len && ny >= 0 && ny < len && board[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        result += 1;
        dfs(i, j);
      }
    }
  }

  return result;
}

describe('solution', () => {
  const board = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ];

  it('섬의 개수를 반환한다.', () => {
    expect(solution(board)).toBe(5);
  });
});
