/* eslint-disable no-param-reassign */
function humanReadable(seconds) {
  const time = ['00', '00', '00'];
  let count = 2;

  while (count > 0) {
    time[count] = `${seconds % 60}`.padStart(2, '0');
    seconds = Math.floor(seconds / 60);

    if (seconds < 1) {
      break;
    }

    count -= 1;
  }

  if (seconds > 0) {
    time[0] = `${seconds}`.padStart(2, '0');
  }

  return time.join(':');
}

describe('humanReadable', () => {
  it('should format correctly', () => {
    expect(humanReadable(0)).toBe('00:00:00');
    expect(humanReadable(5)).toBe('00:00:05');
    expect(humanReadable(60)).toBe('00:01:00');
    expect(humanReadable(86399)).toBe('23:59:59');
    expect(humanReadable(359999)).toBe('99:59:59');
  });
});
