const getSubsets = (attributes) => {
  const { length } = attributes;
  const check = Array.from({ length }, () => false);

  const subSets = [];

  function dfs(level) {
    if (level === length) {
      const subSet = attributes.filter((_, index) => check[index]);

      if (subSet.length) {
        subSets.push(subSet);
      }

      return;
    }

    check[level] = true;
    dfs(level + 1);
    check[level] = false;
    dfs(level + 1);
  }

  dfs(0);

  return subSets;
};

const subsetToKey = (subset, attribute) => subset
  .reduce((strKey, cur) => strKey + attribute[cur], '');

const getSuperKeys = (relation) => (subsets, cb) => subsets.filter((subset) => {
  const set = new Set();

  relation.forEach((attribute) => {
    set.add(cb(subset, attribute));
  });

  if (set.size === relation.length) {
    return true;
  }

  return false;
});

const isSubset = (key, superKey) => superKey.every((subset) => key.includes(subset));

const getCandidateKeys = (superKeys) => superKeys.filter((key, index) => {
  for (let i = 0; i < superKeys.length; i++) {
    if (i !== index && isSubset(key, superKeys[i])) {
      return false;
    }
  }

  return true;
});

function solution(relation) {
  const { length } = relation[0];
  const attributes = Array.from({ length }, (_, i) => i);

  const superKeys = getSuperKeys(relation);

  const candidateKeys = getCandidateKeys(
    superKeys(
      getSubsets(attributes),
      subsetToKey,
    ),
  );

  return candidateKeys.length;
}

describe('후보키', () => {
  const relation = [
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ];

  const subsets = [
    [0, 1, 2, 3], [0, 1, 2],
    [0, 1, 3], [0, 1],
    [0, 2, 3], [0, 2],
    [0, 3], [0],
    [1, 2, 3], [1, 2],
    [1, 3], [1],
    [2, 3], [2],
    [3],
  ];

  const superKeys = [
    [0, 1, 2, 3], [0, 1, 2],
    [0, 1, 3], [0, 1],
    [0, 2, 3], [0, 2],
    [0, 3], [0],
    [1, 2, 3], [1, 2],
  ];

  it('getCandidateKeys', () => {
    expect(getCandidateKeys(superKeys)).toEqual([[0], [1, 2]]);
  });

  it('isSubset', () => {
    expect(isSubset([0, 1, 2, 3], [0, 1, 2])).toBeTruthy();
    expect(isSubset([0, 1, 2], [0, 1, 2, 3])).toBeFalsy();
  });

  it('getSuperKeys', () => {
    expect(getSuperKeys(relation)(subsets, subsetToKey)).toEqual(superKeys);
  });

  it('subsetToKey', () => {
    expect(subsetToKey([0, 1, 2], ['100', 'ryan', 'music', '2'])).toBe('100ryanmusic');
  });

  it('getSubsets', () => {
    expect(getSubsets([0, 1, 2, 3])).toEqual(subsets);
  });

  it('solution', () => {
    expect(solution(relation)).toBe(2);
  });
});
