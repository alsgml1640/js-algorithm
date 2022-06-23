// 통계학 

const fs = require('fs');
const input = fs.readFileSync('2108.txt').toString().split('\r\n');

// 수의 갯수
let N = input.shift();

// input 정렬
input.sort((a,b)=> a-b)

// 중간 인덱스
let Center = Math.floor(input.length/2);
// 입력값 길이
let len = input.length;
// 합
let sum = input.reduce((a,c)=> Number(a)+Number(c));

// 평균
let N1=  Math.round(sum/len);
// 중간값
let N2 = input[Center];

// 최대값
let maxNum =Math.max(...input) 
// 최소값
let minNum =Math.min(...input)
//범위
let range = Math.abs(maxNum-minNum);

console.log(Array.from(new Map(input)));