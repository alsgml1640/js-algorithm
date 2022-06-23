// // 평균은 넘겠지

// // 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다.
// // 당신은 그들에게 슬픈 진실을 알려줘야 한다.

//
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCase = 0;

let input = [];
let avr = 0;
let sum = 0;
let N = 0;
let answer = "";
rl.on("line", function (x) {
  if (testCase === 0) {
    testCase = x;
  } else {
    input.push(x);
  }
  if (input.length === Number(testCase)) {
    for (let i = 0; i < input.length; i++) {
      sum = 0;
      input[i] = input[i].split(" ");
      N = input[i].shift();
      for (let j = 0; j < input[i].length; j++) {
        sum += +input[i][j];
      }
      avr = `${(sum / N).toFixed(3)}% \n`;

      answer += avr;
    }
    console.log(answer);
    rl.close();
  }
});

function solution(str) {
  let answer = str;
  return answer;
}
