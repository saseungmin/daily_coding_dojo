// 행렬 arr[3][2]
// 왼손 시작위치 arr[3][0] 왼손 사용 1,4,7
// 오른손 시작위치 arr[3][2] 오른손 사용 3,6,9
// 중앙 => 두손중 더가까운 2,5,8,0
// 거리가 같으면 왼손잡이는 왼손 사용 오른손잡이는 오른손 사용 / 거리는 1
// 왼손사용은 L 오른손 사용은 R
const result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
console.log(result);

function solution(numbers, hand) {
  let answer = "";
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let leftHandPosition = [3, 0];
  let rightHandPosition = [3, 2];
  while (numbers.length > 0) {
    const number = numbers.shift();
    if (number === 1 || number === 4 || number === 7) {
      answer += "L";
      leftHandPosition[0] = arr.findIndex(
        (val, index) => arr[index][0] === number
      );
      leftHandPosition[1] = 0;
    } else if (number === 3 || number === 6 || number === 9) {
      answer += "R";
      rightHandPosition[0] = arr.findIndex(
        (val, index) => arr[index][2] === number
      );
      rightHandPosition[1] = 2;
    } else {
      const findPosition = arr.findIndex(
        (val, index) => arr[index][1] === number
      );
      const martrix = [findPosition, 1];

      const LeftLength = PositionAbs(leftHandPosition, martrix);
      const RightLength = PositionAbs(rightHandPosition, martrix);
      if (LeftLength > RightLength) {
        answer += "R";
        rightHandPosition = martrix;
      } else if (LeftLength < RightLength) {
        answer += "L";
        leftHandPosition = martrix;
      } else if (LeftLength === RightLength) {
        if (hand === "right") {
          answer += "R";
          rightHandPosition = martrix;
        } else if (hand === "left") {
          answer += "L";
          leftHandPosition = martrix;
        }
      }
    }
  }
  return answer;
}

function PositionAbs(position, martrix) {
  const Xlength = Math.abs(position[0] - martrix[0]);
  const Ylength = Math.abs(position[1] - martrix[1]);
  return Xlength + Ylength;
}
