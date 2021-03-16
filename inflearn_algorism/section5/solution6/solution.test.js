const revertCountObj = (pre, cur) => {
  if (pre[cur]) {
    return {
      ...pre,
      [cur]: pre[cur] + 1,
    };
  }

  return {
    ...pre,
    [cur]: 1,
  };
};

function solution(N, votes) {
  const addCountObj = votes.split('').reduce(revertCountObj, {});

  const result = Object.entries(addCountObj).sort((a, b) => b[1] - a[1]);

  return result[0][0];
}

// function solution(_, s) {
//   const sH = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (sH.has(s[i])) {
//       sH.set(s[i], sH.get(s[i]) + 1);
//     }

//     if (!sH.has(s[i])) {
//       sH.set(s[i], 1);
//     }
//   }
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;

//   sH.forEach((value, key) => {
//     if (value > max) {
//       max = value;
//       answer = key;
//     }
//   });

//   return answer;
// }

describe('solution', () => {
  it('가장 많은 수의 기호가 리턴된다.', () => {
    expect(solution(15, 'BACBACCACCBDEDE')).toBe('C');
  });
});
