// 소트인 사이트 

const fs = require('fs');

const input = fs.readFileSync('1427.txt').toString().split('');

console.log(input.sort((a,b)=> b-a).join(''));