function solution(arr) {
  const result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === 0 || arr[i] > arr[i - 1]) {
  //     result.push(arr[i]);
  //   }
  // }

  // return arr.filter((value, index) => index === 0 || value > arr[index - 1]);

  arr.forEach((value, index) => {
    if (index === 0 || value > arr[index - 1]) {
      result.push(value);
    }
  });

  return result;
}

describe('solution', () => {
  it('Should return only the number that is greater than the number in front of it', () => {
    expect(solution([7, 3, 9, 5, 6, 12])).toEqual([7, 9, 6, 12]);
    expect(solution([2, 6, 9, 1, 4, 3])).toEqual([2, 6, 9, 4]);
  });
});
