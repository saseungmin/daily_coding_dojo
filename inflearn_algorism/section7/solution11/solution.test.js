const countDvds = (songs) => (middle) => {
  let count = 1;
  let sum = 0;

  songs.forEach((song) => {
    if (song + sum <= middle) {
      sum += song;
    } else {
      count += 1;
      sum = song;
    }
  });

  return count;
};

function solution(count, songs) {
  const songsMinutes = songs.reduce((acc, cur) => acc + cur, 0);

  let start = Math.max(...songs);
  let end = songsMinutes;
  let result = 0;

  const dvdLen = countDvds(songs);

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (dvdLen(middle) <= count) {
      result = middle;
      end = middle - 1;
    }

    if (dvdLen(middle) > count) {
      start = middle + 1;
    }
  }

  return result;
}

describe('solution', () => {
  const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  it('DVD의 최소 용량 크기를 반환한다.', () => {
    expect(solution(3, songs)).toBe(17);
  });
});
