/* eslint-disable consistent-return */
// 소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다.
// 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
// HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
// NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다.
// 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
// TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.
// 1. 파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다.
// 2. 파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다.
//    숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 같은 값으로 처리된다.
// 3. 두 파일의 HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다.

const upper = (str) => str.toUpperCase();
const compareCharCode = (a, b) => upper(a).localeCompare(upper(b));

const checkStrFile = (str) => str.match(/^([a-z.-\s]+)([0-9]{1,5})(.*)$/i);

const deletePreZero = (number) => Number(number.replace(/(^0+)/, ''));

const compareToNum = (a, b) => deletePreZero(a) - deletePreZero(b);

const sortByFiles = (a, b) => {
  const filesA = checkStrFile(a);
  const filesB = checkStrFile(b);

  const compared = compareCharCode(filesA[1], filesB[1]);

  if (compared === 0) {
    return compareToNum(filesA[2], filesB[2]);
  }

  return compared;
};

function solution(files) {
  return files.sort(sortByFiles);
}

describe('파일명 정렬', () => {
  it('sortByFiles', () => {
    const files = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
    expect(files.sort(sortByFiles)).toEqual(
      ['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png'],
    );
  });

  it('compareToNum', () => {
    expect(compareToNum('00101', '100')).toBe(1);
  });

  it('deletePreZero', () => {
    expect(deletePreZero('00101')).toBe(101);
    expect(deletePreZero('101')).toBe(101);
  });

  it('checkStrFile', () => {
    expect(checkStrFile('img1.png').toString()).toEqual(['img1.png', 'img', '1', '.png'].toString());
    expect(checkStrFile('F-15').toString()).toEqual(['F-15', 'F-', '15', ''].toString());
  });

  it('solution', () => {
    expect(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']))
      .toEqual(['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png']);

    expect(solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']))
      .toEqual(['A-10 Thunderbolt II', 'B-50 Superfortress', 'F-5 Freedom Fighter', 'F-14 Tomcat']);

    expect(solution(['ABC    12', 'AbC    12', 'aBc    12'])).toEqual(['ABC    12', 'AbC    12', 'aBc    12']);
    expect(solution(['a00000456.png', 'a00000123.GIF'])).toEqual(['a00000456.png', 'a00000123.GIF']);

    expect(solution(['img000012345', 'img1.png', 'img2', 'IMG02'])).toEqual(['img000012345', 'img1.png', 'img2', 'IMG02']);

    expect(solution(['muzi1.txt', 'MUZI1.txt', 'muzi002.txt', 'muzi1.TXT'])).toEqual(['muzi1.txt', 'MUZI1.txt', 'muzi1.TXT', 'muzi002.txt']);
  });
});
