// 숫자의 합

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = "";
let input = "";
rl.on("line", function (line) {
  if (N === "") {
    N = line;
  } else if (N !== "") {
    input = line;
  }
  if (input != "") {
    console.log(solution(input));
    rl.close();
  }
});

function solution(input) {
  let answer = 0;
  Array.from(input).forEach((e, i) => {
    answer += +e;
  });
  return answer;
}
