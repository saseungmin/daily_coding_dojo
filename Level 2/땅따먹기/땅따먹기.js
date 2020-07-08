const result = solution([
  [1, 2, 3, 5],
  [5, 6, 7, 100],
  [4, 3, 2, 1],
]);
console.log(result);

function solution(land) {
  let one = 0;
  let two = 0;
  let three = 0;
  const row = 4;
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < row; j++) {
      const target = land[i][j];
      if (j === 0) {
        one = land[i - 1][j + 1] + target; // land[0][1] + land[1][0]
        two = land[i - 1][j + 2] + target; // land[0][2] + land[1][0]
        three = land[i - 1][j + 3] + target; //  land[0][3] + land[1][0]
      } else if (j === 1) {
        one = land[i - 1][j - 1] + target; // land[0][0] + land[1][1]
        two = land[i - 1][j + 1] + target; // land[0][2] + land[1][1]
        three = land[i - 1][j + 2] + target; // land[0][3] + land[1][1]
      } else if (j === 2) {
        one = land[i - 1][j - 2] + target;
        two = land[i - 1][j - 1] + target;
        three = land[i - 1][j + 1] + target;
      } else if (j === 3) {
        one = land[i - 1][j - 3] + target;
        two = land[i - 1][j - 2] + target;
        three = land[i - 1][j - 1] + target;
      }

      land[i][j] = Math.max(one, two, three);
    }
  }
  console.log(land);
  return land[land.length - 1].reduce((pre, current) =>pre > current ? pre : current);
}

// function solution(land) {
//     let answer = 0;
//     const row = 4;
//     for (let i = 0; i < row; i++) {
//         let sumArr = 0;
//         let indexNumber = 0;
//         for (const j in land) {
//             if (j == 0) {
//                 sumArr += land[j][i];
//                 indexNumber = i;
//             } else {
//                 const maxValue = land[j].filter((val, idx) => idx !== indexNumber).reduce((pre, current) => pre > current ? pre : current);
//                 indexNumber = land[j].findIndex(val => val === maxValue);
//                 sumArr += maxValue;
//             }
//         }
//         if (answer < sumArr) {
//             answer = sumArr;
//         }
//     }

//     return answer;
// }
