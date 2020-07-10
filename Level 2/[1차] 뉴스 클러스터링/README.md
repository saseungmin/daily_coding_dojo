# ✔ [1차] 뉴스 클러스터링
## 📌 2018 KAKAO BLIND RECRUITMENT
## 🌈 LEVEL 2
### 🔸 문제 풀이
- 파라미터로 주어진 문자열 두개를 대문자로 변경한 뒤, `substring`을 사용하여 2글자씩 자른다. 그리고 정규식(`/[A-Z]{2}/`)와 비교하여 일치하는게 존재하면 배열에 넣어준다.
<pre>
const regExp = /[A-Z]{2}/;

for (let i = 0; i < str1.length; i++) {
    const splitStr = str1.toUpperCase().substring(i, i + 2);
    if (splitStr.match(regExp)) {
        str1Arr.push(splitStr);
    }
}
</pre>
- 두글자씩 나눠진 문자열이 담긴 배열을 다중 교집합과 다중 합집합을 구한다.
- 합집합은 두번재 배열값을 전부 배열에 담아준다.
- 교집합은 첫번째 문자열 배열에 두번째 문자열 값이 포함하고 있으면 해당 문자열이 담긴 배열 위치를 자른다. 그후 `filter`를 통해 `undefined` 안된 값만 뽑아준다.

<pre>
  const intersection = str2Arr.map((val) => {
      temp.push(val);
      if (str1Arr.includes(val)) {
        return str1Arr.splice(str1Arr.indexOf(val), 1).join("");
      }
    }).filter((val) => val !== undefined);
</pre>
- 첫번째 문자열 배열에 남아있는 값에 두번째 배열의 값과 합쳐준다.
<pre>
const union = temp.concat(...str1Arr);
</pre>

- 그 후, 합집합의 길이가 0일땐, 65536을 리턴해주고 값이 존재할땐 교집합/합집합*65536해준뒤 `Math.floor`를 통해 소수점을 절삭해준다.
<pre>
  return unionLen === 0 ? 65536 : Math.floor((intersectionLen / unionLen) * 65536);
</pre>

<hr>

📌 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript