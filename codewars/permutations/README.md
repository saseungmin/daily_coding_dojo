## Permutations - 4 kyu

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.   

```js
permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
```

#### 다른 풀이

```js
function permutations(str) {
  return (str.length <= 1) ? [str]
    : Array.from(new Set(
      str.split('')
        .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map((p) => char + p))
        .reduce((r, x) => r.concat(x), []),
    ));
}
```

---

- 📌 문제 출처: https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript
