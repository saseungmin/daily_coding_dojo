function solution(requires, subjects) {
  const requiresArr = requires.split('');

  for (let i = 0; i < subjects.length; i++) {
    if (subjects[i] === requiresArr[0]) {
      requiresArr.shift();
    }
  }

  if (requiresArr.length === 0) {
    return 'YES';
  }

  return 'NO';
}

describe('solution', () => {
  context('올바르게 짜여진 수업설계일 때', () => {
    const a = 'CBA';
    const b = 'CBDAGE';
    it('YES를 리턴한다.', () => {
      expect(solution(a, b)).toBe('YES');
    });
  });

  context('올바르지 못하게 짜여진 수업설계일 때', () => {
    const a = 'CBA';
    const b = 'CGEADB';
    it('NO를 리턴한다.', () => {
      expect(solution(a, b)).toBe('NO');
    });
  });
});
