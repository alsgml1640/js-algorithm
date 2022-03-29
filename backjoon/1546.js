// 평균
// 세준이는 기말고사를 망쳤다. 그래서 점수를 조작해서 가져가기로 했다.
// 자기 점수중에 최대값을 골랐다. 이 값을 M이라고 한다.
// 그리고 나서 모든 점수를 점수/m*100 으로 고쳤다.
// 최고점이 70 , 수학점수가 50이었으면
// 수학점수는  50/70* 100 이 된다.
// 이방법으로 계산했을때 새로운 평균을 구하는 프로그램을 작성하라

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCase = 0;
let score = "";

let max = 0;
rl.on("line", function (x) {
  if (testCase === 0) {
    testCase = x;
  } else {
    score = x.split(" ");
    max = Math.max.apply(null, score);
    console.log(solution(score));

    rl.close();
  }
});

function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += (arr[i] / max) * 100;
  }

  answer = answer / testCase;
  return answer;
}
