    function solution(skill, skill_trees) {
        let skillArr = skill.split("");
        let str = '';
        let answer = 0;
        for (let i = 0; i < skill_trees.length; i++) {
            str = skill_trees[i].split("").filter(val => skillArr.includes(val)).join("");
            console.log(str);
            if (str === skill.substring(0, str.length)) {
                answer++;
            }
        }
        return answer;
    }
