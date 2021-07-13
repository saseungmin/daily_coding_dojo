// 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
// 거리두기를 위하여 응시자들 끼리는 맨해튼 거리가 2 이하로 앉지 말아 주세요.
// 단, 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.
// 각 대기실별로 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
// P는 응시자가 앉아있는 자리를 의미합니다.
// O는 빈 테이블을 의미합니다.
// X는 파티션을 의미합니다.

// [-1, 0], [0, 1], [1, 0], [0, -1] => 무조건 거리두기 실패
// [1, -1], [-1, 1], [1, 1], [-1, -1] => 양 옆에 파티션이 존재하면 성공, 양 옆에 파티션이 존재하지 않거나 하나만 존재하면 실패
// [0, 2], [-2, 0], [2, 0], [0, -2] => 사이에 파티션이 존재하면 성공, 파티션이 존재하지 않으면 실패
const convertToArray = (places) => places.map((place) => place.split(''));

const isOneManhattanDistance = (waitingRoom) => (x, y) => {
  const oneManhattans = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  for (let i = 0; i < oneManhattans.length; i++) {
    const newX = x + oneManhattans[i][0];
    const newY = y + oneManhattans[i][1];

    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      if (waitingRoom[newX][newY] === 'P') {
        return false;
      }
    }
  }

  return true;
};

const isSuccessDiagonalDistancing = (waitingRoom) => (x, y) => {
  const betweenLocation = [[-1, 0, 0, 1], [0, 1, 1, 0], [1, 0, 0, -1], [0, -1, -1, 0]];
  const diagonalManhattan = [[-1, 1], [1, 1], [1, -1], [-1, -1]];

  for (let i = 0; i < diagonalManhattan.length; i++) {
    const newX = x + diagonalManhattan[i][0];
    const newY = y + diagonalManhattan[i][1];

    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      if (waitingRoom[newX][newY] === 'P') {
        const [fx, fy] = [x + betweenLocation[i][0], y + betweenLocation[i][1]];
        const [sx, sy] = [x + betweenLocation[i][2], y + betweenLocation[i][3]];

        if (waitingRoom[fx][fy] !== 'X' || waitingRoom[sx][sy] !== 'X') {
          return false;
        }
      }
    }
  }

  return true;
};

const isTwoManhattanDistance = (waitingRoom) => (x, y) => {
  const twoManhattans = [[0, 2], [-2, 0], [2, 0], [0, -2]];
  const oneManhattans = [[0, 1], [-1, 0], [1, 0], [0, -1]];

  for (let i = 0; i < twoManhattans.length; i++) {
    const newX = x + twoManhattans[i][0];
    const newY = y + twoManhattans[i][1];

    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      if (waitingRoom[newX][newY] === 'P') {
        const [ox, oy] = [x + oneManhattans[i][0], y + oneManhattans[i][1]];

        if (waitingRoom[ox][oy] !== 'X') {
          return false;
        }
      }
    }
  }

  return true;
};

const distancingStatus = (waitingRoom) => {
  const isSuccessOneManhattan = isOneManhattanDistance(waitingRoom);
  const isSuccessDiagonal = isSuccessDiagonalDistancing(waitingRoom);
  const isSuccessTwoManhattan = isTwoManhattanDistance(waitingRoom);

  for (let i = 0; i < waitingRoom.length; i++) {
    for (let j = 0; j < waitingRoom[i].length; j++) {
      if (waitingRoom[i][j] === 'P') {
        const isSomeFailureDistancing = [
          isSuccessOneManhattan(i, j), isSuccessDiagonal(i, j), isSuccessTwoManhattan(i, j),
        ].some((isSuccessDistancing) => !isSuccessDistancing);

        if (isSomeFailureDistancing) {
          return 0;
        }
      }
    }
  }

  return 1;
};

function solution(places) {
  const answer = [];

  places.forEach((place) => {
    answer.push(distancingStatus(convertToArray(place)));
  });

  return answer;
}

describe('거리두기 확인하기', () => {
  describe('isTwoManhattanDistance', () => {
    it('should be true', () => {
      expect(isTwoManhattanDistance([
        ['P', 'O', 'O', 'O', 'P'],
        ['O', 'X', 'X', 'O', 'X'],
        ['O', 'P', 'X', 'P', 'X'],
        ['O', 'O', 'X', 'O', 'X'],
        ['P', 'O', 'X', 'X', 'P'],
      ])(0, 0)).toBeTruthy();
    });

    it('should be false', () => {
      expect(isTwoManhattanDistance([
        ['P', 'O', 'O', 'O', 'P'],
        ['O', 'X', 'X', 'O', 'X'],
        ['P', 'P', 'X', 'P', 'X'],
        ['O', 'O', 'X', 'O', 'X'],
        ['P', 'O', 'X', 'X', 'P'],
      ])(0, 0)).toBeFalsy();
    });
  });

  describe('isSuccessDiagonalDistancing', () => {
    it('should be true', () => {
      expect(isSuccessDiagonalDistancing([
        ['P', 'O', 'O', 'O', 'P'],
        ['O', 'X', 'X', 'O', 'X'],
        ['O', 'P', 'X', 'P', 'X'],
        ['O', 'O', 'X', 'O', 'X'],
        ['P', 'O', 'X', 'X', 'P'],
      ])(0, 0)).toBeTruthy();
    });

    it('should be false', () => {
      expect(isSuccessDiagonalDistancing([
        ['P', 'X', 'O', 'O', 'P'],
        ['O', 'P', 'X', 'X', 'P'],
        ['O', 'P', 'X', 'P', 'X'],
        ['O', 'O', 'X', 'O', 'X'],
        ['P', 'O', 'X', 'X', 'P'],
      ])(0, 0)).toBeFalsy();
    });
  });

  describe('isOneManhattanDistance', () => {
    it('should be true', () => {
      expect(isOneManhattanDistance([
        ['P', 'O', 'O', 'O', 'P'],
        ['O', 'X', 'X', 'O', 'X'],
        ['O', 'P', 'X', 'P', 'X'],
        ['O', 'O', 'X', 'O', 'X'],
        ['P', 'O', 'X', 'X', 'P'],
      ])(0, 0)).toBeTruthy();
    });

    it('should be false', () => {
      expect(isOneManhattanDistance([
        ['P', 'O', 'O', 'O', 'P'],
        ['P', 'X', 'X', 'O', 'X'],
        ['O', 'P', 'X', 'P', 'X'],
        ['O', 'O', 'X', 'O', 'X'],
        ['P', 'O', 'X', 'X', 'P'],
      ])(0, 0)).toBeFalsy();
    });
  });

  it('distancingStatus', () => {
    expect(distancingStatus([
      ['O', 'P', 'O', 'P', 'O'],
      ['O', 'X', 'X', 'O', 'X'],
      ['O', 'P', 'X', 'P', 'X'],
      ['O', 'O', 'X', 'O', 'X'],
      ['P', 'O', 'X', 'X', 'P'],
    ])).toBe(0);
  });

  it('convertToArray', () => {
    expect(convertToArray(['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'])).toEqual([
      ['P', 'O', 'O', 'O', 'P'],
      ['O', 'X', 'X', 'O', 'X'],
      ['O', 'P', 'X', 'P', 'X'],
      ['O', 'O', 'X', 'O', 'X'],
      ['P', 'O', 'X', 'X', 'P'],
    ]);
  });

  it('solution', () => {
    const places = [
      [
        'POOOP',
        'OXXOX',
        'OPXPX',
        'OOXOX',
        'POXXP',
      ],
      ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
      ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
      ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
      ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
    ];

    expect(solution(places)).toEqual([1, 0, 1, 1, 1]);
  });
});
