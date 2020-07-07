const result = solution("1S2D*3T");
console.log(result);

function solution(dartResult) {
  let tempArr = [];
  const splitArray = dartResult.match(/(\d+)|[S|D|T]|[*|#]/g);
  console.log(splitArray);
  for (const index in splitArray) {
    const cal = splitArray[index];
    if (cal === "S") {
      tempArr.push(checkArr(splitArray, index, 1));
    } else if (cal === "D") {
      tempArr.push(checkArr(splitArray, index, 2));
    } else if (cal === "T") {
      tempArr.push(checkArr(splitArray, index, 3));
    } else if (cal === "*") {
      tempArr.push(cal);
    }
  }

  while (true) {
    const tempIndex = tempArr.findIndex((val) => val === "*");
    if (tempIndex === -1) {
      break;
    } else {
      multiple(tempArr, tempIndex);
      tempArr.splice(tempIndex, 1);
    }
  }
  return tempArr.reduce((a, b) => a + b, 0);
}

function checkArr(splitArray, index, pow) {
  if (splitArray[parseInt(index) + 1] === "#") {
    return Math.pow(splitArray[index - 1], pow) * -1;
  } else {
    return Math.pow(splitArray[index - 1], pow);
  }
}

function multiple(tempArr, tempIndex) {
  if (tempIndex < 2) {
    tempArr[tempIndex - 1] = tempArr[tempIndex - 1] * 2;
  } else {
    tempArr[tempIndex - 1] = tempArr[tempIndex - 1] * 2;
    tempArr[tempIndex - 2] = tempArr[tempIndex - 2] * 2;
  }
}
