const checkCourseCount = (course) => (checks) => course
  .includes(checks.filter((check) => check === 1).length);

const createCourseMenu = (courses) => courses.reduce((arr, cur) => {
  if (!arr.length) {
    return [cur];
  }

  const top = arr[arr.length - 1];

  if (top.key.length !== cur.key.length || top.value === cur.value) {
    return [
      ...arr,
      cur,
    ];
  }

  return arr;
}, []);

const sortByCourseMap = (courses) => courses.sort((a, b) => {
  if (b.key.length === a.key.length) {
    return b.value - a.value;
  }

  return b.key.length - a.key.length;
});

function solution(orders, course) {
  const answer = [];
  let check = [];
  const courseMap = new Map();

  const isIncludesCourse = checkCourseCount(course);

  function dfs(level, menu) {
    if (level === menu.length) {
      if (!isIncludesCourse(check)) {
        return;
      }

      let temp = '';

      for (let i = 0; i < check.length; i++) {
        if (check[i] === 1) {
          temp += menu[i];
        }
      }

      if (temp.length > 1) {
        const sortStr = temp.split('').sort().join('');

        if (courseMap.has(sortStr)) {
          courseMap.set(sortStr, courseMap.get(sortStr) + 1);
        }

        if (!courseMap.has(sortStr)) {
          courseMap.set(sortStr, 1);
        }
      }

      return;
    }

    check[level] = 1;
    dfs(level + 1, menu);
    check[level] = 0;
    dfs(level + 1, menu);
  }

  orders.forEach((order) => {
    const menu = order.split('');
    check = Array.from({ length: menu.length + 1 }, () => 0);

    dfs(0, menu);
  });

  courseMap.forEach((value, key) => {
    if (value > 1) {
      answer.push({
        key,
        value,
      });
    }
  });

  return createCourseMenu(sortByCourseMap(answer))
    .map(({ key }) => key)
    .sort();
}

describe('코스요리 메뉴의 구성의 문자열 형태로 배열에 담아 사전 순으로 오름차순으로 반환한다.', () => {
  describe('checkCourseCount', () => {
    const isIncludes = checkCourseCount([1, 2, 3]);

    context('Includes curse count', () => {
      it('should be true', () => {
        expect(isIncludes([1, 1, 1, 0, 0])).toBeTruthy();
      });
    });

    context("Doesn't includes curse count", () => {
      it('should be false', () => {
        expect(isIncludes([1, 1, 1, 1, 0])).toBeFalsy();
      });
    });
  });

  it('solution', () => {
    expect(solution(
      ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
      [2, 3, 4],
    )).toEqual(['AC', 'ACDE', 'BCFG', 'CDE']);

    expect(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])).toEqual(['WX', 'XY']);
  });
});
