        const result = solution([70, 50, 80, 50], 100);
        console.log(result);
        
        function solution(people, limit) {
            let answer = 0;
            let index = 0;
            // limit랑 같으면 filter 해준다.
            let arr = people.filter(val => val < limit);
            answer = people.length - arr.length; 
            // 내림차순으로 sort
            arr.sort((a,b)=> {
                return b - a;
            })
            while(arr.length > 0){
                //가장 작은 몸무게 pop
                const lowNum = arr.pop();
                // 가장 적은 몸무게랑 val이랑 더한 값이 limit 보다 작거나 같으면 return 
                const arr2 = arr.find(val => {
                    return val + lowNum <= limit;
                });
                // 그 인덱스 번호 찾기
                index = arr.indexOf(arr2);
                // return 값이 있으면
                if(arr2 != null){
                    // 그 전 인덱스들은 무조건 1개이기 때문에  arr2 index 번호까지 버린다.
                    arr.splice(0,index+1);
                    console.log(arr);
                    // 그 만큼 더해주기
                    answer+= index+1;
                }else{
                    answer += arr.length +1;
                    break;
                }
            }
            return answer;
        }
