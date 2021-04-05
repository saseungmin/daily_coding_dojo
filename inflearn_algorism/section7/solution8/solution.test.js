/* eslint-disable prefer-destructuring */
const toEndTimeAsc = (a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
};

function solution(meeting) {
  const sortedMeeting = meeting.sort(toEndTimeAsc);
  let result = 0;
  let end = 0;

  sortedMeeting.forEach((meet) => {
    if (end <= meet[0]) {
      end = meet[1];
      result += 1;
    }
  });

  return result;
}

describe('solution', () => {
  it('최대 사용할 수 있는 회의 수를 반환한다.', () => {
    expect(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])).toBe(3);
    expect(solution([[3, 3], [1, 3], [2, 3]])).toBe(2);
  });
});
