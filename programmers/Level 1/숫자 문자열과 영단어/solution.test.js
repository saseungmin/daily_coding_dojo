const dictionary = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let answer = '';
  let word = '';

  const regexp = /[0-9]/;

  for (let i = 0; i < s.length; i++) {
    if (regexp.test(s[i])) {
      answer += s[i];
    } else {
      word += s[i];

      const number = dictionary[word];

      if (regexp.test(number)) {
        answer += number;
        word = '';
      }
    }
  }

  return Number(answer);
}

describe('숫자 문자열과 영단어', () => {
  it('solution', () => {
    expect(solution('one4seveneight')).toBe(1478);
    expect(solution('23four5six7')).toBe(234567);
    expect(solution('2three45sixseven')).toBe(234567);
    expect(solution('123')).toBe(123);
  });
});
