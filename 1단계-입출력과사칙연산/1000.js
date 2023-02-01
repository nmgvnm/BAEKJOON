// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 예제 입력 1 [ 1 2 ]
// 예제 출력 1 [ 3 ]

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); // 동기 메서드 (Sync로 이름이 끝이 남)
const a = Number(input[0]);
const b = Number(input[1]);
console.log(a+b);