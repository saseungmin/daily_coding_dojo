const convertToNumber = (arr) => parseInt(arr.join(''), 10);
const regexp = (str) => str.match(/[0-9]/ig);

function solution(str) {
  return convertToNumber(regexp(str));
}

describe('solution', () => {
  it('Should be converted to a natural number.(Remove leading zeros)', () => {
    expect(solution('tge0a1h205er')).toBe(1205);
    expect(solution('g0en2T0s8eSoft')).toBe(208);
  });

  it('Should be converted to a natural number.', () => {
    expect(solution('tg1ea1h205er')).toBe(11205);
    expect(solution('g2en2T0s8eSoft')).toBe(2208);
  });
});
