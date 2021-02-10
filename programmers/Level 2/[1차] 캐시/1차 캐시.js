const result = solution(5,['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']);

function solution(cacheSize, cities) {
    let answer = 0;
    let cacheQue = [];
    const cacheHit = 1;
    const cacheMiss = 5; 

    if(cacheSize === 0){
        return cities.length * cacheMiss;
    }
    
    for(let i = 0; i < cities.length; i++){
        const upper = cities[i].toUpperCase();
        if(cacheQue.includes(upper)){
            const lru = cacheQue.splice(cacheQue.indexOf(upper),1).join('');
            cacheQue.unshift(lru);
            answer += cacheHit;
        }else{
            if(cacheQue.length < cacheSize){
                cacheQue.unshift(upper);
            }else{
                cacheQue.pop();
                cacheQue.unshift(upper);
            }
            answer += cacheMiss;
        }
    }
    return answer;
}