// 단어의 갯수

let fs = require('fs').readFileSync('input.text').toString();

let input = fs.trim().split(' ');
let answer = 0;

for(let i = 0 ; i < input.length ; i ++){
    if(input[i] !== ''){
        answer++;
    }
}
console.log(answer);
