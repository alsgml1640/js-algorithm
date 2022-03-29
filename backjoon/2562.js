// 최대값
// 9개의 서로 다른 자연수가 주어질때, 이들 중 최댓값을 찾고
// 그 최대값이 몇번쨰 수인지
// 구하는 프로그램 작성

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const arr = [];
rl.on("line", function (x) {
  count++;
  arr.push(x);
  if (count === 9) {
    console.log(solution(arr));
    rl.close();
  }
}).on("close", function () {
  process.exit();
});

function solution(arr) {
  let answer = "";
  let max = Math.max(...arr);
  let index = Number(arr.indexOf(String(max))) + 1;

  answer = `${max} \n${index}`;
  return answer;
}
