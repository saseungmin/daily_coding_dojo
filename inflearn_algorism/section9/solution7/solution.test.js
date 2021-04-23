/* eslint-disable no-param-reassign */
function solution(board) {
  let result = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const len = board.length;
  const queue = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        result += 1;

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let k = 0; k < dx.length; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx >= 0 && nx < len && ny >= 0 && ny < len && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
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
