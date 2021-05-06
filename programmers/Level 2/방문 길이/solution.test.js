/* eslint-disable no-loop-func */
const command = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

function solution(dirs) {
  const dirArr = dirs.split('');

  let answer = 0;
  let x = 5;
  let y = 5;
  const locationInfo = [[5, 5, 5, 5]];

  for (let i = 0; i < dirArr.length; i++) {
    const [xCoor, yCoor] = command[dirArr[i]];

    const preX = x;
    const preY = y;

    x += xCoor;
    y += yCoor;

    if (x >= 0 && y >= 0 && x < 11 && y < 11) {
      const isPassed = locationInfo.some(([
        startX, startY, endX, endY,
      ]) => startX === preX && startY === preY && endX === x && endY === y);

      if (!isPassed) {
        locationInfo.push([preX, preY, x, y]);
        locationInfo.push([x, y, preX, preY]);

        answer += 1;
      }
    } else {
      x = preX;
      y = preY;
    }
  }

  return answer;
}

describe('방문 길이', () => {
  it('solution', () => {
    expect(solution('ULURRDLLU')).toBe(7);
    expect(solution('LULLLLLLU')).toBe(7);
  });
});
