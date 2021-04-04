function solution(size, tasks) {
  const cacheMemory = [];

  tasks.forEach((task) => {
    const hit = cacheMemory.findIndex((data) => data === task);

    if (hit === -1) {
      if (cacheMemory.length === size) {
        cacheMemory.pop();
      }

      cacheMemory.unshift(task);
    } else {
      const cache = cacheMemory.splice(hit, 1);

      cacheMemory.unshift(cache[0]);
    }
  });

  return cacheMemory;
}

describe('solution', () => {
  const tasks = [1, 2, 3, 2, 6, 2, 3, 5, 7];
  it('마지막에 남은 캐시 메모리를 반환한다.', () => {
    expect(solution(5, tasks)).toEqual([7, 5, 3, 2, 6]);
  });
});
