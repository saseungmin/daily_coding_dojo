// const onlyCountForZero = (str) => {
//   const zeros = str.match(/0/g);

//   if (!zeros) {
//     return 0;
//   }

//   return zeros.length;
// };

const onlyCountForZero = (str) => (str.match(/0/g) || []).length;

const removeZero = (str) => str.replace(/0/g, '');

const convertToBinary = (str) => Number(str.length).toString(2);

function solution(s) {
  let str = s;
  let zeroCount = 0;
  let count = 0;

  while (str.length > 1) {
    zeroCount += onlyCountForZero(str);
    str = convertToBinary(removeZero(str));
    count += 1;
  }

  return [count, zeroCount];
}

describe('이진 변환 반복하기', () => {
  it('convertToBinary', () => {
    expect(convertToBinary('111111')).toBe('110');
  });

  it('onlyCountForZero', () => {
    expect(onlyCountForZero('110010101001')).toBe(6);
    expect(onlyCountForZero('111111')).toBe(0);
  });

  it('removeZero', () => {
    expect(removeZero('110010101001')).toBe('111111');
  });

  it('solution', () => {
    expect(solution('110010101001')).toEqual([3, 8]);
    expect(solution('01110')).toEqual([3, 3]);
    expect(solution('1111111')).toEqual([4, 1]);
  });
});
