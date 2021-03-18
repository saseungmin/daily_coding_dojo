const convertToMap = (word) => {
  const mapWord = new Map();

  for (let i = 0; i < word.length; i++) {
    if (mapWord.has(word[i])) {
      mapWord.set(word[i], mapWord.get(word[i]) + 1);
    }

    if (!mapWord.has(word[i])) {
      mapWord.set(word[i], 1);
    }
  }

  return mapWord;
};

const compareMaps = (target) => (now) => {
  if (target.size !== now.size) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of target) {
    if (!now.has(key) || now.get(key) !== value) {
      return false;
    }
  }

  return true;
};

function solution(word1, word2) {
  const targetMap = convertToMap(word2);
  const compare = compareMaps(targetMap);

  let count = 0;

  for (let i = 0; i < word1.length; i++) {
    const nowMap = convertToMap(word1.substr(i, word2.length));

    const isAnagram = compare(nowMap);

    if (isAnagram) {
      count += 1;
    }
  }

  return count;
}

describe('solution', () => {
  it('아나그램 일떄의 개수를 반환한다.', () => {
    expect(solution('bacaAacba', 'abc')).toBe(3);
  });
});
