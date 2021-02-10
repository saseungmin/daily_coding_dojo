function solution(nums) {
  let answer = 0;
  const len = nums.length;

  const checkDecimal = (sum) => {
    if (sum === 1) return true;

    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) return false;
    }

    return true;
  };

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const number = nums[i] + nums[j] + nums[k];

        if (checkDecimal(number)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 7, 6, 4]));
