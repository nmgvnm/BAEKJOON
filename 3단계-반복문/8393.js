// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 1부터 n까지 합을 출력한다.

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let sum = 0;
// let input1 = Number(input)

for (let i = 0; i <= input; i++) {
    sum += i;
}
console.log(sum);
