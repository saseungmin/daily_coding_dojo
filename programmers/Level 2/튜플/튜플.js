        const result = solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
        console.log(result);

        function solution(s) {
            var answer = [];
            const strArr = s.slice(2,s.length-2).split("},{").sort((x,y) => x.length - y.length);
            console.log(strArr);
            for(let i = 0; i<strArr.length; i++){
                const fArr=strArr[i].split(",");
                console.log(fArr);
                for(let j = 0; j<fArr.length; j++){
                    const result= answer.findIndex(val => val === parseInt(fArr[j]));
                    if(result === -1){
                        answer.push(parseInt(fArr[j]));
                    }
                }
            }
            return answer;
        }
