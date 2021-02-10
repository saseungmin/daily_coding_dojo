function solution(arr) {
  let answer = 1;
  arr.sort((a, b) => a - b);
  let share = [];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    let divide = 2;
    while (divide <= arr[i]) {
      if (arr[i] % divide === 0) {
        if (temp[0] && temp[0].number === divide) {
          temp[0].count = temp[0].count + 1;
        } else {
          temp.push({ number: divide, count: 1 });
        }
        arr[i] = arr[i] / divide;
      } else {
        divide++;
      }
    }
    share.push(temp);
  }

  for (let i = 0; i < share.length; i++) {
    for (let j = 0; j < share[i].length; j++) {
      const index = resultArr.findIndex(
        (val) => val.number === share[i][j].number
      );
      if (index !== -1) {
        if (resultArr[index].count < share[i][j].count) {
          resultArr[index].count = share[i][j].count;
        }
      } else {
        resultArr.push(share[i][j]);
      }
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    answer *= Math.pow(resultArr[i].number, resultArr[i].count);
  }
  return answer;
}