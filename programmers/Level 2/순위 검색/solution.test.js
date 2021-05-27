/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// function solution(info, query) {
//   const answer = [];

//   for (let i = 0; i < query.length; i++) {
//     const newQuery = query[i].split(' ').filter((q) => q !== 'and');
//     let count = 0;

//     for (let j = 0; j < info.length; j++) {
//       let check = true;
//       const newInfo = info[j].split(' ');

//       for (let k = 0; k < newInfo.length - 1; k++) {
//         if (newQuery[k] !== '-' && newQuery[k] !== newInfo[k]) {
//           check = false;
//           break;
//         }
//       }

//       if (check) {
//         const len = newInfo.length;

//         if (Number(newQuery[len - 1]) <= Number(newInfo[len - 1])) {
//           count += 1;
//         }
//       }
//     }

//     answer.push(count);
//   }

//   return answer;
// }

const binarySearch = (scores, queryScore) => {
  let start = 0;
  let end = scores.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (scores[middle] >= queryScore) {
      end = middle;
    }

    if (scores[middle] < queryScore) {
      start = middle + 1;
    }
  }

  return scores.length - start;
};

function solution(info, query) {
  const answer = [];
  const infoMap = {};

  const combination = (array, score, start) => {
    const key = array.join('');
    const infoScores = infoMap[key];

    if (infoScores) {
      infoMap[key].push(score);
    } else {
      infoMap[key] = [score];
    }

    for (let i = start; i < array.length; i++) {
      const temp = [...array];
      temp[i] = '-';
      combination(temp, score, i + 1);
    }
  };

  for (let i = 0; i < info.length; i++) {
    const infos = info[i].split(' ');
    const score = Number(infos.pop());
    combination(infos, score, 0);
  }

  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const newQuery = query[i].split(' ').filter((q) => q !== 'and');
    const queryScore = Number(newQuery.pop());
    const scores = infoMap[newQuery.join('')];

    if (scores) {
      answer.push(binarySearch(scores, queryScore));
    } else {
      answer.push(0);
    }
  }

  return answer;
}

describe('순위 검색', () => {
  it('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(2);
  });

  it('solution', () => {
    expect(solution(
      ['java backend junior pizza 150',
        'python frontend senior chicken 210',
        'python frontend senior chicken 150',
        'cpp backend senior pizza 260',
        'java backend junior chicken 80',
        'python backend senior chicken 50'],
      ['java and backend and junior and pizza 100',
        'python and frontend and senior and chicken 200',
        'cpp and - and senior and pizza 250',
        '- and backend and senior and - 150',
        '- and - and - and chicken 100',
        '- and - and - and - 150'],
    )).toEqual([1, 1, 1, 1, 2, 4]);
  });
});
