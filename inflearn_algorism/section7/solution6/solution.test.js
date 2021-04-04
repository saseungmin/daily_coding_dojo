// function solution(students) {
//   const sortStudents = [...students].sort((a, b) => a - b);

//   return sortStudents.reduce((result, student, index) => {
//     if (student !== students[index]) {
//       return [
//         ...result,
//         index + 1,
//       ];
//     }

//     return result;
//   }, []);
// }

function solution(students) {
  const sortStudents = [...students].sort((a, b) => a - b);
  const result = [];

  sortStudents.forEach((student, index) => {
    if (student !== students[index]) {
      result.push(index + 1);
    }
  });

  return result;
}

describe('solution', () => {
  it('현수와 짝궁의 반 번호를 반환한다.', () => {
    expect(solution([120, 125, 152, 130, 135, 135, 143, 127, 160])).toEqual([3, 8]);
    expect(solution([120, 130, 150, 150, 130, 150])).toEqual([3, 5]);
  });
});
