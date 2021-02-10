    // 문자열 s의 길이가 4 혹은 6이고
    // 숫자로만 구성돼있는지 확인해주는 함수

    const solution2 = (s) => {return s.match(/^\d{6}$|^\d{4}$/) ? true : false}

    const result = solution2("1w324");
    console.log(result);

    function solution(s) {
        const str = s.match(/^\d{6}$|^\d{4}$/);
        return str ? true : false;
    }