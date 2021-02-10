function solution(genres, plays) {
    let answer = [];
    let jsonArr = [];
    let sumObj = {};
    let sumArr = [];

    const sorted = (a, b) => b.play - a.play;

    for(const index in genres){
        jsonArr.push({id:index, genre:genres[index], play:plays[index]});
        sumObj[genres[index]] = (sumObj[genres[index]] || 0) + plays[index];
    }
    
    for(const value in sumObj){
        sumArr.push({genre:value, play:sumObj[value]});
    }
    
    const sortSum = sumArr.sort(sorted);
    const sortObj = jsonArr.sort(sorted);
    
    for(const i in sortSum){
        let count =0;
        for(const j in sortObj){
            if(sortSum[i].genre === sortObj[j].genre){
                answer.push(parseInt(sortObj[j].id));
                count++;
            }
            if(count === 2){
                break;
            }
        }
    }
    
    return answer;
}