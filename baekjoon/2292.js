const fs = require('fs').readFileSync('2292.txt').toString();

let answer = 0;
for(let i = 1; i < 8; i ++){

   console.log(Math.floor(fs/(i * 6)))  ;
}
// console.log(fs);