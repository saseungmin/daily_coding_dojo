const result = solution('FRANCE','french');
console.log(result);

function solution(str1, str2) {
  let str1Arr = [];
  let str2Arr = [];
  let temp = [];
  const regExp = /[A-Z]{2}/;

  for (let i = 0; i < str1.length; i++) {
    const splitStr = str1.toUpperCase().substring(i, i + 2);
    if (splitStr.match(regExp)) {
      str1Arr.push(splitStr);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const splitStr = str2.toUpperCase().substring(i, i + 2);
    if (splitStr.match(regExp)) {
      str2Arr.push(splitStr);
    }
  }

  const intersection = str2Arr.map((val) => {
      temp.push(val);
      if (str1Arr.includes(val)) {
        return str1Arr.splice(str1Arr.indexOf(val), 1).join("");
      }
    }).filter((val) => val !== undefined);

  const union = temp.concat(...str1Arr);

  const intersectionLen = intersection.length;
  const unionLen = union.length;

  return unionLen === 0 ? 65536 : Math.floor((intersectionLen / unionLen) * 65536);
}
