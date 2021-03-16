const countWord = (obj, cur) => {
  if (obj[cur]) {
    return {
      ...obj,
      [cur]: obj[cur] + 1,
    };
  }

  return {
    ...obj,
    [cur]: 1,
  };
};

const covertToObj = (word) => word.split('').reduce(countWord, {});

function solution(word1, word2) {
  const countWord2 = covertToObj(word2);

  const isAnagram = Object.entries(covertToObj(word1))
    .every(([key, value]) => countWord2[key] && countWord2[key] === value);

  if (isAnagram) {
    return 'YES';
  }

  return 'NO';
}

// function solution(str1, str2) {
//   const sH = new Map();

//   for (const x of str1) {
//     if (sH.has(x)) {
//       sH.set(x, sH.get(x) + 1);
//     }

//     if (!sH.has(x)) {
//       sH.set(x, 1);
//     }
//   }
//   for (const x of str2) {
//     if (!sH.has(x) || sH.get(x) === 0) {
//       return 'NO';
//     }

//     sH.set(x, sH.get(x) - 1);
//   }

//   return 'YES';
// }

describe('solution', () => {
  context('Is Anagram', () => {
    it('두 단어가 같다. YES를 출력한다.', () => {
      expect(solution('AbaAeCe', 'baeeACA')).toBe('YES');
    });
  });

  context("Isn't Anagram", () => {
    it('두 단어가 다르다. NO를 출력한다.', () => {
      expect(solution('testeeeq', 'tEQekrs')).toBe('NO');
    });
  });
});
