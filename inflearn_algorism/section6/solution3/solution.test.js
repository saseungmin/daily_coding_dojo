/* eslint-disable no-param-reassign */
function solution(board, moves) {
  const stack = [];
  let answer = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const tile = board[i][move - 1];

      if (tile !== 0) {
        if (stack[stack.length - 1] === tile) {
          answer += 2;
          stack.pop();
        } else if (stack[stack.length - 1] !== tile) {
          stack.push(tile);
        }

        board[i][move - 1] = 0;
        break;
      }
    }
  });
  return answer;
}

describe('solution', () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];

  const moves = [1, 5, 3, 5, 1, 2, 1, 4];

  it('터트려져 사라진 인형의 개수를 반환한다.', () => {
    expect(solution(board, moves)).toBe(4);
  });
});
