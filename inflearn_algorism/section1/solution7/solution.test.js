// const sliceOneDigit = (number) => parseInt(number.toString().slice(1, 2), 10);

function solution(day, arr) {
  // return arr.reduce((pre, cur) => {
  //   if (sliceOneDigit(cur) === day) {
  //     return pre + 1;
  //   }

  //   return pre;
  // }, 0);

  return arr.filter((number) => number % 10 === day).length;
}

describe('solution', () => {
  it("should The day the date is the same as the car's day digit", () => {
    expect(solution(3, [25, 23, 11, 47, 53, 17, 33])).toBe(3);
    expect(solution(0, [12, 20, 54, 30, 87, 91, 30])).toBe(3);
  });
});
