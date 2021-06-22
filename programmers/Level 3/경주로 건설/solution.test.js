/* eslint-disable no-param-reassign */
// 0은 칸이 비어 있음을 1은 해당 칸이 벽으로 채워져 있음
// 직선 도로 하나를 만들 때는 100원이 소요되며, 코너를 하나 만들 때는 500원이 추가
const bfs = (board) => (starting) => {
  const len = board.length - 1;
  const result = Array.from({ length: len + 1 }, () => Array(len + 1).fill(Infinity));

  const queue = [starting];

  const dx = [-1, 0, 1, 0]; // 좌 하 우 상
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [x, y, direction, cost] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nX = x + dx[i];
      const nY = y + dy[i];
      const nCost = i === direction ? cost + 100 : cost + 600;

      if (nX <= len && nX >= 0 && nY <= len && nY >= 0
        && board[nX][nY] === 0 && result[nX][nY] > nCost) {
        result[nX][nY] = nCost;
        queue.push([nX, nY, i, nCost]);
      }
    }
  }

  return result[len][len];
};

function solution(board) {
  const cost = bfs(board);

  return Math.min(cost([0, 0, 1, 0]), cost([0, 0, 2, 0]));
}

describe('경주로 건설', () => {
  it('solution', () => {
    expect(solution([
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ])).toBe(3800);

    expect(solution([
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ])).toBe(2100);

    expect(solution([
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0],
    ])).toBe(3200);
  });
});
