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
  console.log(solution(line));
  rl.close();
});

let sameNum = 1;
function solution(input) {
  let answer = 0;
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      sameNum++;
      num = input[i];
    }
  }

  if (sameNum === 3) {
    answer = 10000 + num * 1000;
  } else if (sameNum === 2) {
    answer = 1000 + num * 100;
  } else {
    let max = Math.max.apply(null, input);
    answer = max * 100;
  }
  return answer;
}
