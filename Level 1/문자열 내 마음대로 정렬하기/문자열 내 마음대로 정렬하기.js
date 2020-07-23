const result = solution(['sun', 'bed', 'car'], 1);
console.log(result);

function solution(strings, n) {
  return strings
    .map((val, idx) => {
      return { sort: val.substr(n, 1), str: strings[idx] };
    })
    .sort((a, b) =>
      a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : a.str < b.str ? -1 : a.str > b.str ? 1 : 0,
    )
    .map((val) => val.str);
}
