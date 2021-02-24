// function solution(s, t) {
//   const arr = s.split('');
//   const location = [];
//   const answer = [];

//   arr.forEach((value, index) => {
//     if (value === t) {
//       location.push(index);
//     }
//   });

//   arr.forEach((_, index) => {
//     let min = Number.MAX_SAFE_INTEGER;
//     location.forEach((locate) => {
//       const abs = Math.abs(index - locate);

//       if (index === locate) {
//         min = 0;
//         return;
//       }

//       if (min > abs) {
//         min = abs;
//       }
//     });
//     answer.push(min);
//   });

//   return answer;
// }

function solution(s, t) {
  const arr = s.split('');
  const answer = [];
  let num = Number.MAX_SAFE_INTEGER;

  arr.forEach((value) => {
    if (value === t) {
      num = 0;
      answer.push(num);
    }

    if (value !== t) {
      num += 1;
      answer.push(num);
    }
  });

  num = Number.MAX_SAFE_INTEGER;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      num = 0;
    }

    if (s[i] !== t) {
      num += 1;
      answer[i] = Math.min(answer[i], num);
    }
  }

  return answer;
}

describe('solution', () => {
  it('Should Returns the shortest character distance', () => {
    expect(solution('teachermode', 'e')).toEqual([1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]);
  });
});
