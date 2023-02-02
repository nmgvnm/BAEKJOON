// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

// 입력 [ 7 3 ]
/* 
   출력 => [
    10
    4
    21
    2
    1
  ] 
*/

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b)); // Math.floor => 소수점 버리기
console.log(a%b);
