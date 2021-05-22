const matchBlocks = (board) => {
  const foundBlocks = [];

  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      const target = board[i][j];

      if (target && target === board[i][j + 1]
        && target === board[i - 1][j + 1]
        && target === board[i - 1][j]) {
        foundBlocks.push([i, j]);
      }
    }
  }

  return foundBlocks;
};

const removeFourBlocks = (board, foundBlocks) => {
  const newBoard = [...board];

  foundBlocks.forEach(([x, y]) => {
    newBoard[x][y] = 0;
    newBoard[x][y + 1] = 0;
    newBoard[x - 1][y + 1] = 0;
    newBoard[x - 1][y] = 0;
  });

  return newBoard;
};

const relocationBlocks = (board) => {
  const newBoard = [...board];

  for (let i = newBoard.length - 1; i > 0; i--) {
    if (newBoard[i].some((v) => !v)) {
      for (let j = 0; j < newBoard[i].length; j++) {
        for (let k = i - 1; k >= 0; k--) {
          if (!newBoard[i][j] && newBoard[k][j]) {
            newBoard[i][j] = newBoard[k][j];
            newBoard[k][j] = 0;
            break;
          }
        }
      }
    }
  }

  return newBoard;
};

function solution(m, n, board) {
  let newBoard = board.map((v) => v.split(''));

  while (true) {
    const foundBlocks = matchBlocks(newBoard);

    if (!foundBlocks.length) {
      return newBoard.reduce((sum, nowBoard) => sum + nowBoard.filter((v) => !v).length, 0);
    }

    newBoard = relocationBlocks(removeFourBlocks(newBoard, foundBlocks));
  }
}
describe('solution', () => {
  const board = [
    'CCBDE',
    'AAADE',
    'AAABF',
    'CCBBF',
  ];

  it('solution', () => {
    expect(solution(4, 5, board)).toBe(14);
  });

  it('matchBlocks', () => {
    expect(matchBlocks(board.map((v) => v.split('')))).toEqual([[2, 0], [2, 1]]);
  });

  it('removeFourBlocks', () => {
    expect(removeFourBlocks(board.map((v) => v.split('')), [[2, 0], [2, 1]])).toEqual(
      [
        ['C', 'C', 'B', 'D', 'E'],
        [0, 0, 0, 'D', 'E'],
        [0, 0, 0, 'B', 'F'],
        ['C', 'C', 'B', 'B', 'F'],
      ],
    );
  });

  it('relocationBlocks', () => {
    const newBoard = [
      ['C', 'C', 'B', 'D', 'E'],
      [0, 0, 0, 'D', 'E'],
      [0, 0, 0, 'B', 'F'],
      ['C', 'C', 'B', 'B', 'F'],
    ];

    expect(relocationBlocks(newBoard)).toEqual([
      [0, 0, 0, 'D', 'E'],
      [0, 0, 0, 'D', 'E'],
      ['C', 'C', 'B', 'B', 'F'],
      ['C', 'C', 'B', 'B', 'F'],
    ]);
  });
});
