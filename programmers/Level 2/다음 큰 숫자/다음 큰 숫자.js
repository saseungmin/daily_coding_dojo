function solution(n) {
    const regExp = /1{1}/g;
    const originalLen = n.toString(2).match(regExp).length;
    while(true){
        n +=1;
        const targetLen = n.toString(2).match(regExp).length;
        if(originalLen === targetLen){
            break;
        }
    }
    return n;
}