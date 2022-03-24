// 주사위 3개
// 같은 눈이 3개 나오면 10000 + (같은 눈) * 1000
// 같은 눈이 2개 나오면 1000 + (같은 눈) * 100
// 모두 다른 눈 (제일 큰 눈) * 100

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  line = line.split(" ");
  let a = parseInt(line[0]);
  let b = parseInt(line[1]);
  let c = parseInt(line[2]);
  console.log(solution(a, b, c));
  rl.close();
});

function solution(a, b, c) {
  let answer = 0;
  if (a === b && b === c) {
    answer = 10000 + a * 1000;
  } else if (a === b && b !== c) {
    answer = 1000 + a * 100;
  } else if (b === c && c !== a) {
    answer = 1000 + b * 100;
  } else if (c === a && a !== b) {
    answer = 1000 + c * 100;
  } else {
    let max = Math.max(a, b, c);
    answer = max * 100;
  }
  return answer;
}
