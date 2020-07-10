function solution(s) {
    
    const strSplit = s.split(' ').map(val => parseInt(val,10));
    const maxValue = strSplit.reduce((pre, current) => pre > current ? pre : current);
    const minValue = strSplit.reduce((pre, current) => pre < current ? pre : current);
    
    return `${minValue} ${maxValue}`;
}