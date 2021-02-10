const result = solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

console.log(result);

function solution(clothes) {
  let answer = 1;
  let clothesObject = {};
  for (const index in clothes) {
    clothesObject[clothes[index][1]] = (clothesObject[clothes[index][1]] || 1) + 1;
  }
  console.log(clothesObject);
  for (const index in clothesObject) {
    answer *= clothesObject[index];
  }
  return answer - 1;
}
