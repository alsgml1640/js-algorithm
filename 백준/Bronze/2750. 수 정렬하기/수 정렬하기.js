const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => Number(e));

//let testCase = fs[0];
//console.log(input);
input.shift();
//console.log(input);
input.sort((a,b) => a-b);
//console.log(input);

 input.forEach((e)=> console.log(e))