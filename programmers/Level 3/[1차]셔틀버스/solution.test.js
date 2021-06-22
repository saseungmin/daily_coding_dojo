/* eslint-disable no-loop-func */
const getSeconds = (timetable) => timetable.map((time) => {
  const [hours, minutes] = time.split(':');

  return (Number(hours) * 3600) + (Number(minutes) * 60);
});

const addZeroInTime = (time) => (time < 10 ? `0${time}` : time);

const convertToClockFormat = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${addZeroInTime(hours)}:${addZeroInTime(minutes)}`;
};

// 셔틀 운행 횟수 n, 셔틀 운행 간격 t, 한 셔틀에 탈 수 있는 최대 크루 수 m,
// 크루가 대기열에 도착하는 시각을 모은 배열 timetable이 입력으로 주어진다.
function solution(n, t, m, timetable) {
  const secTimeTable = [...getSeconds(timetable)].sort((a, b) => a - b);
  let startTime = 32400;

  for (let i = 0; i < n; i++) {
    const filteredCrews = secTimeTable.filter((time) => startTime >= time).length;

    if (i === n - 1) {
      if (filteredCrews >= m) {
        startTime = secTimeTable[m - 1] - 60;
      }
    } else {
      secTimeTable.splice(0, filteredCrews > m ? m : filteredCrews);
      startTime += (t * 60);
    }
  }

  return convertToClockFormat(startTime);
}

describe('셔틀버스', () => {
  it('convertToClockFormat', () => {
    expect(convertToClockFormat(28800)).toBe('08:00');
    expect(convertToClockFormat(28860)).toBe('08:01');
    expect(convertToClockFormat(29520)).toBe('08:12');
    expect(convertToClockFormat(60)).toBe('00:01');
  });

  it('getSeconds', () => {
    expect(getSeconds(['08:00', '08:01', '08:02', '08:03'])).toEqual([
      28800, 28860, 28920, 28980,
    ]);
  });

  it('solution', () => {
    expect(solution(1, 1, 5,
      ['08:00', '08:01', '08:02', '08:03'])).toBe('09:00');
    expect(solution(2, 10, 2,
      ['09:10', '09:09', '08:00'])).toBe('09:09');
    expect(solution(2, 1, 2,
      ['09:00', '09:00', '09:00', '09:00'])).toBe('08:59');
    expect(solution(1, 1, 5,
      ['00:01', '00:01', '00:01', '00:01', '00:01'])).toBe('00:00');
    expect(solution(1, 1, 1, ['23:59'])).toBe('09:00');
    expect(solution(10, 60, 45,
      ['23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59']))
      .toBe('18:00');
    expect(solution(2, 10, 3, ['09:05', '09:09', '09:13'])).toBe('09:10');
    expect(solution(10, 1, 5, ['09:00', '09:00', '09:00', '09:00', '09:00'])).toBe('09:09');
  });
});
