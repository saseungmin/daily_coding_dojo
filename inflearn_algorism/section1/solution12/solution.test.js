const caseConversion = (value) => (value.match(/[A-Z]/) ? value.toLowerCase() : value.toUpperCase());

function solution(str) {
  return str.split('').map(caseConversion).join('');
}

describe('solution', () => {
  it('should Uppercase to lowercase and lowercase to uppercase', () => {
    expect(solution('StuDY')).toBe('sTUdy');
  });
});
