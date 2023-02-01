// 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.
/* 
  1. 입력 [ 1 2 ] -> 출력 [ 2 ]
  2. 입력 [ 3 4 ] -> 출력 [ 12 ]
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); // 동기 메서드 (Sync로 이름이 끝이 남)
const a = Number(input[0]);
const b = Number(input[1]);
console.log(a*b);

/* 
한 줄 입력

let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let count = Number(input[0]);
let answerStr = '';

for(let i = 1; i <= count; i++){
    let num = input[i].split(" ");
    answerStr *= Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answerStr);

*/