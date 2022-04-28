// 1998년생인 내가 태국에서는 2541년생?

let Y = 543;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  console.log(solution(x));
  rl.close();
});

function solution(input) {
  let answer = 0;

  answer = parseInt(input) - Y;
  return answer;
}
