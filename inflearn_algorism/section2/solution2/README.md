### 📚 큰 수 출력하기
1. 자신의 바로 앞 수보다 큰 수만 출력
2. 첫 번째 수는 무조건 출력

#### 🎯 정리
- `reduce`를 사용해서 풀 수 있었다.
- 다음과 같이 풀면 immutable하게 풀 수 있다.

```javascript
function solution(arr) {
  const result = arr.reduce((pre, cur) => {
    if (cur > pre[0]) {
      return [cur, pre[1] + 1];
    }

    return pre;
  }, [0, 0]);

  return result[1];
}
```