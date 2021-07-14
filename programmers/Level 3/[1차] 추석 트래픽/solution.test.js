// solution 함수에 전달되는 lines 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며,
// 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.
// 응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 2016-09-15 hh:mm:ss.sss 형식으로 되어 있다.
// 처리시간 T는 0.1s, 0.312s, 2s 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 s로 끝난다.
// 서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 0.001 ≦ T ≦ 3.000이다.
// lines 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.
const sortByEndTimeAsc = (linesTime) => linesTime.sort((a, b) => {
  if (a[1] === b[1]) {
    return -1;
  }

  return a[1] - b[1];
});

const convertToLineTimeStatus = (lines) => {
  const date = new Date(lines[0]);

  const [h, m, seconds] = lines[1].split(':');
  const [s, ms] = seconds.split('.');

  const processingTime = lines[2].replace(/s/g, '').split('.');

  const endTime = date.setHours(h, m, s, ms) + 999;

  const milliseconds = processingTime.length === 2 ? processingTime[1] : 0;

  const startTime = date.setSeconds(
    date.getSeconds() - processingTime[0],
    (date.getMilliseconds() - milliseconds) + 1,
  );

  return [['s', startTime], ['e', endTime]];
};

const splitConvertLines = (lines) => lines.flatMap((line) => convertToLineTimeStatus(line.split(' ')));

function solution(lines) {
  let answer = 0;
  let count = 0;

  const sortedTimeLines = sortByEndTimeAsc(splitConvertLines(lines));

  sortedTimeLines.forEach((timeLine) => {
    if (timeLine[0] === 's') {
      count += 1;
      answer = Math.max(count, answer);
    }

    if (timeLine[0] === 'e') {
      count -= 1;
    }
  });

  return answer;
}

describe('추석 트래픽', () => {
  it('sortByEndTimeAsc', () => {
    expect(sortByEndTimeAsc([
      [1473868805001, 1473868807000],
      [1473868802003, 1473868804002],
    ])).toEqual([
      [1473868802003, 1473868804002],
      [1473868805001, 1473868807000],
    ]);
  });

  it('convertToLineTimeStatus', () => {
    expect(convertToLineTimeStatus(['2016-09-15', '01:00:04.002', '2.0s']))
      .toEqual([['s', 1473868802003], ['e', 1473868805001]]);
    expect(convertToLineTimeStatus(['2016-09-15', '01:00:07.000', '2s']))
      .toEqual([['s', 1473868805001], ['e', 1473868807999]]);
  });

  it('splitConvertLines', () => {
    expect(splitConvertLines([
      '2016-09-15 01:00:04.002 2.0s',
      '2016-09-15 01:00:07.000 2s',
    ])).toEqual([
      ['s', 1473868802003],
      ['e', 1473868805001],
      ['s', 1473868805001],
      ['e', 1473868807999],
    ]);
  });

  it('solution', () => {
    expect(solution([
      '2016-09-15 01:00:04.002 2.0s',
      '2016-09-15 01:00:07.000 2s',
    ])).toBe(2);

    expect(solution([
      '2016-09-15 20:59:57.421 0.351s',
      '2016-09-15 20:59:58.233 1.181s',
      '2016-09-15 20:59:58.299 0.8s',
      '2016-09-15 20:59:58.688 1.041s',
      '2016-09-15 20:59:59.591 1.412s',
      '2016-09-15 21:00:00.464 1.466s',
      '2016-09-15 21:00:00.741 1.581s',
      '2016-09-15 21:00:00.748 2.31s',
      '2016-09-15 21:00:00.966 0.381s',
      '2016-09-15 21:00:02.066 2.62s',
    ])).toBe(7);
  });
});
