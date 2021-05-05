// function solution(maps) {
//   const newMaps = [...maps];

//   const answer = [];
//   const lenX = maps.length - 1;
//   const lenY = maps[0].length - 1;

//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];

//   function dfs(x, y, count) {
//     if (x === lenX && y === lenY) {
//       answer.push(count);
//       return;
//     }

//     for (let i = 0; i < 4; i++) {
//       const newX = x + dx[i];
//       const newY = y + dy[i];

//       if (newX <= lenX && newX >= 0 && newY <= lenY && newX >= 0 && newMaps[newX][newY] === 1) {
//         newMaps[newX][newY] = 0;

//         dfs(newX, newY, count + 1);

//         newMaps[newX][newY] = 1;
//       }
//     }
//   }

//   if (newMaps[0][0] === 0) {
//     return -1;
//   }

//   newMaps[0][0] = 0;
//   dfs(0, 0, 1);

//   return answer.length ? Math.min(...answer) : -1;
// }

function solution(maps) {
  const newMaps = [...maps];

  let answer = -1;
  const lenX = maps.length - 1;
  const lenY = maps[0].length - 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === lenX && y === lenY) {
      answer = count;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx <= lenX && ny >= 0 && ny <= lenY && newMaps[nx][ny] === 1) {
        newMaps[nx][ny] = 0;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  return answer;
}

describe('게임 맵 최단거리', () => {
  // 0은 벽이 있고 1은 벽이 없다.
  // 캐릭터는 [0.0], 상대 팀 진영은 [4.4]

  context('상대 진영에 도달할 수 있을 때', () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ];

    it('가장 빠른 거리를 반환한다.', () => {
      expect(solution(maps)).toBe(11);
    });
  });

  context('상대 진여에 도달할 수 없을 때', () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ];

    it('-1을 반환한다.', () => {
      expect(solution(maps)).toBe(-1);
    });
  });
});
