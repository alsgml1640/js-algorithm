const fs = require('fs').readFileSync('1712.txt').toString().split(' ');

let A = fs[0];
let B = fs[1];
let C = fs[2];

let margin = C - B;
let cnt = Math.floor(A / margin) + 1;
//console.log(margin);
//console.log(cnt);

console.log(margin <= 0 ? -1 : cnt);



