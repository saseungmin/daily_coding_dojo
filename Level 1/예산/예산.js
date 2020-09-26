var result = solution([2, 2, 3, 3], 10);
console.log(result);

function solution(d, budget) {
  var answer = 0;
  var sum = 0;
  var dsort = d.sort((a, b) => a - b);
  for (var i = 0; i < dsort.length; i++) {
    sum += dsort[i];
    if (sum > budget) {
      break;
    } else {
      answer++;
    }
  }
  return answer;
}
