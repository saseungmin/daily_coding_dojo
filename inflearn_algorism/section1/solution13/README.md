### 📚 가장 긴 문자열
1. 가장 긴 문자열 출력

#### 🎯 정리
- `reduce`를 사용해서 비교 후 해당 문자 출력

```javascript
function solution(arr) {
  return arr.reduce((pre, cur) => {
    if (cur.length - pre.length > 0) {
      return cur;
    }
    return pre;
  });
}
```