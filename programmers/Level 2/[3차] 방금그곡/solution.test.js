// 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
// 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
// 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다.
// 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
// 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
// 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
// 조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.

const splitSound = (sounds) => sounds.match(/[A-Z]{1}#?/ig);

const getDiffDateMinutes = (start, end) => {
  const startTime = new Date(0, 0, 0, start[0], start[1], 0);
  const endTime = new Date(0, 0, 0, end[0], end[1], 0);

  return (endTime.getTime() - startTime.getTime()) / 1000 / 60;
};

const convertSoundInfo = (info) => {
  const [startTime, endTime, title, sound] = info.split(',');

  const diffMinutes = getDiffDateMinutes(startTime.split(':'), endTime.split(':'));
  const sounds = splitSound(sound);

  if (diffMinutes >= sounds.length) {
    const newSound = [];
    const leftMinutes = diffMinutes - sounds.length;
    let count = 0;

    while (newSound.length < leftMinutes) {
      newSound.push(sounds[count]);
      count += 1;

      if (count % sounds.length === 0) {
        count = 0;
      }
    }

    return [diffMinutes, title, `${sound}${newSound.join('')}`];
  }

  return [diffMinutes, title, sounds.slice(0, diffMinutes).join('')];
};

const findSoundInfo = (m, infos) => {
  const includeSoundInfo = [];

  infos.forEach((info) => {
    const soundInfo = convertSoundInfo(info);
    const regExp = new RegExp(`${m}(?!#)`, 'g');

    if (regExp.test(soundInfo[2])) {
      includeSoundInfo.push(soundInfo);
    }
  });

  return includeSoundInfo;
};

function solution(m, musicinfos) {
  const resultSoundInfo = findSoundInfo(m, musicinfos);

  if (!resultSoundInfo.length) {
    return '(None)';
  }

  resultSoundInfo.sort((a, b) => b[0] - a[0]);

  return resultSoundInfo[0][1];
}

describe('방금그곡', () => {
  it('solution', () => {
    expect(solution(
      'ABCDEFG',
      ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'],
    )).toBe('HELLO');
    expect(solution(
      'CC#BCC#BCC#BCC#B',
      ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'],
    )).toBe('FOO');
    expect((solution(
      'ABC',
      ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'],
    ))).toBe('WORLD');
  });

  it('splitSound', () => {
    expect(splitSound('AA#BC#CB#')).toEqual(['A', 'A#', 'B', 'C#', 'C', 'B#']);
  });

  it('findSoundInfo', () => {
    expect(findSoundInfo(
      'ABCDEFG',
      [
        '12:00,12:14,HELLO,CDEFGAB',
        '13:00,13:05,WORLD,ABCDEF',
      ],
    )).toEqual([[14, 'HELLO', 'CDEFGABCDEFGAB']]);
    expect(findSoundInfo(
      'ABCDEFG',
      ['13:00,13:05,WORLD,ABCDEF'],
    )).toEqual([]);
  });

  it('convertSoundInfo', () => {
    expect(convertSoundInfo('12:00,12:14,HELLO,CDE#FGAB')).toEqual([14, 'HELLO', 'CDE#FGABCDE#FGAB']);
    expect(convertSoundInfo('12:00,12:05,HELLO,CDE#FGAB')).toEqual([5, 'HELLO', 'CDE#FG']);
    expect(convertSoundInfo('03:00,03:30,FOO,CC#B')).toEqual([30, 'FOO', 'CC#BCC#BCC#BCC#BCC#BCC#BCC#BCC#BCC#BCC#B']);
  });

  it('getDiffDateMinutes', () => {
    expect(getDiffDateMinutes(['12', '00'], ['12', '14'])).toBe(14);
    expect(getDiffDateMinutes(['13', '00'], ['13', '05'])).toBe(5);
  });
});
