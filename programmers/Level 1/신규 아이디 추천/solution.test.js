/* eslint-disable camelcase */
// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
const replaceToLowerCase = (id) => id.toLowerCase();

const removeNotMatchCharacters = (id) => id.match(/[a-z|0-9|\-|_|.]/g).join('');
// /[~!@#$%^&*()=+[{\]}:?,<>/]/gi

const replaceFullStop = (id) => id.replace(/[.]{2,}/g, '.');

const removeBeginAndEndFullStop = (id) => id.replace(/^\.|\.$/g, '');

const insertLetterA = (id) => {
  if (!id.trim().length) {
    return 'a';
  }

  return id;
};

const removeOverThanFifteenCharacters = (id) => {
  if (id.length >= 16) {
    return removeBeginAndEndFullStop(id.slice(0, 15));
  }

  return id;
};

// const addLessThanThreeCharacters = (id) => {
//   const len = id.length;

//   if (len <= 2) {
//     return id + id[len - 1].repeat(3 - len);
//   }

//   return id;
// };

const addLessThanThreeCharacters = (id) => id.padEnd(3, id[id.length - 1]);

function solution(new_id) {
  return addLessThanThreeCharacters( // 7
    removeOverThanFifteenCharacters( // 6
      insertLetterA( // 5
        removeBeginAndEndFullStop( // 4
          replaceFullStop( // 3
            removeNotMatchCharacters( // 2
              replaceToLowerCase(new_id), // 1
            ),
          ),
        ),
      ),
    ),
  );
}

describe('7단계의 처리 과정을 거친 후의 추천 아이디를 리턴한다.', () => {
  it('solution', () => {
    expect(solution('...!@BaT#*..y.abcdefghijklm')).toBe('bat.y.abcdefghi');
    expect(solution('z-+.^.')).toBe('z--');
  });

  it('소문자로 치환 후 반환한다.', () => {
    expect(replaceToLowerCase('TESTtest')).toBe('testtest');
  });

  it('알파벳 소문자, 숫자, "-", "_", "." 를 제외한 모든 문자를 제거 후 반환한다.', () => {
    expect(removeNotMatchCharacters('...!@bat#*..')).toBe('...bat..');
    expect(removeNotMatchCharacters('z-+.^.')).toBe('z-..');
  });

  it('마침표가 2번 이상 연속된 부분을 하나의 마침표로 치환 후 반환한다.', () => {
    expect(replaceFullStop('...!@BaT#*..')).toBe('.!@BaT#*.');
  });

  it('마침표가 처음이나 끝에 위치한다면 제거 후 반환한다.', () => {
    expect(removeBeginAndEndFullStop('.test.')).toBe('test');
  });

  describe('insertLetterA', () => {
    context('Without string', () => {
      it('a를 대입 후 반환한다.', () => {
        expect(insertLetterA(' ')).toBe('a');
      });
    });

    context('With string', () => {
      it('그래도 반환한다.', () => {
        expect(insertLetterA('test')).toBe('test');
      });
    });
  });

  describe('removeOverThanSixteenCharacters', () => {
    context('When Over 15 Characters', () => {
      it('15글자까지 자른 뒤 반환한다.', () => {
        expect(removeOverThanFifteenCharacters('wrowjqneekrlrm.ttt')).toBe('wrowjqneekrlrm');
      });
    });

    context('When Less 16 Characters', () => {
      it('그대로 반환한다.', () => {
        expect(removeOverThanFifteenCharacters('wrowjqneekrlrmt')).toBe('wrowjqneekrlrmt');
      });
    });
  });

  describe('addLessThanThreeCharacters', () => {
    context('When 2 or less Characters', () => {
      it('마지막 문자를 반복해서 3글자를 반환한다.', () => {
        expect(addLessThanThreeCharacters('a')).toBe('aaa');
      });
    });

    context('When 3 or over Characters', () => {
      it('그대로 반환한다.', () => {
        expect(addLessThanThreeCharacters('aaa')).toBe('aaa');
      });
    });
  });
});
