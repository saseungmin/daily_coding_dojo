# 두 정수 사이의 합
- level 1

- 아래 방법 가장 짧게 끝나고 반복문도 없으니 좋아보인다.
- 또 하나를 알아간다..

<pre><code>
    function adder(a, b){
      var result = 0

      return (a+b)*(Math.abs(b-a)+1)/2;
    }
    console.log( adder(3, 5) )
    
</code></pre>
