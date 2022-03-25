// 더하기 사이클
// 주어진 숫자가 원래대로 돌아오는 사이클 수 구하기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let firstNum = 0;
let cnt = 0;
let answer = 0;
rl.on("line", function (line) {
  solution(firstNum);
  rl.close();
}).on("close", function () {
  console.log(cnt);
});

let N1 = 0;
let N2 = 0;
function solution(num) {
  while (num != answer) {
    cnt++;
    N1 = parseInt(a);
    N2 = parseInt(b);
    answer = N1 + N2;
  }
  return cnt;
}
