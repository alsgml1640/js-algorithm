// 가위 바위 보
// A,B 두사람이 가위바위보 게임을한다.
// A가 이기면 A출력
// B가 이기면 B출력
// 1:가위, 2:바위 , 3:보

function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < 5; i++) {
    if (arr1[i] === arr2[i]) {
      answer.push("D");
    } else if (
      (arr1[i] === 1 && arr2[i] === 3) ||
      (arr1[i] === 2 && arr2[i] === 1) ||
      (arr1[i] === 3 && arr2[i] === 2)
    ) {
      answer.push("A");
    } else {
      answer.push("B");
    }
  }
  return answer;
}
const arr1 = [2, 3, 3, 1, 3];
const arr2 = [1, 1, 2, 2, 3];
console.log(solution(arr1, arr2));
