function solution(gems) {
  let answer = [0, 100000];

  const { size } = new Set(gems);
  const gemMap = new Map();

  for (let i = 0; i < gems.length; i++) {
    const gem = gems[i];

    if (gemMap.has(gem)) {
      gemMap.delete(gem);
    }
    gemMap.set(gem, i);

    if (size === gemMap.size) {
      const firstValue = gemMap.values().next().value;
      const min = answer[1] - answer[0];
      const target = (i + 1) - (firstValue + 1);

      if (min > target || (min === target && answer[0] > firstValue + 1)) {
        answer = [firstValue + 1, i + 1];
      }
    }
  }

  // forEach 사용
  // gems.forEach((gem, i) => {
  //   if (gemMap.has(gem)) {
  //     gemMap.delete(gem);
  //   }
  //   gemMap.set(gem, i);

  //   if (size === gemMap.size) {
  //     const firstValue = gemMap.values().next().value;
  //     const min = answer[1] - answer[0];
  //     const target = (i + 1) - (firstValue + 1);

  //     if (min > target || (min === target && answer[0] > firstValue + 1)) {
  //       answer = [firstValue + 1, i + 1];
  //     }
  //   }
  // });

  return answer;
}

// const sortByDistance = (gems) => gems.sort((a, b) => {
//   const subtractA = a[1] - a[0];
//   const subtractB = b[1] - b[0];

//   if (subtractA === subtractB) {
//     return a[1] - b[1];
//   }

//   return subtractA - subtractB;
// });

// function solution(gems) {
//   const answer = [];

//   const { size } = new Set(gems);
//   const gemMap = new Map();

//   for (let i = 0; i < gems.length; i++) {
//     const gem = gems[i];

//     gemMap.delete(gem);
//     gemMap.set(gem, i);

//     if (size === gemMap.size) {
//         answer.push([gemMap.values().next().value + 1, i + 1]);
//     }
//   }

//   return sortByDistance(answer)[0];
// }

describe('보석 쇼핑', () => {
  it('solution', () => {
    expect(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']))
      .toEqual([3, 7]);
  });
});
