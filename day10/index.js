const fs = require('fs');

const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n')

let X = [1];

for (let i = 0; i < input.length; i++) {
    let dir = input[i]
    dir = dir.split(" ");
    // console.log(dir)
    if (dir[0] === 'noop') {
        X.push(X[X.length - 1])
    }
    else {
        let num = parseInt(dir[1]);
        X.push(X[X.length - 1])
        X.push(X[X.length - 1] + num)
    }    
   
}

console.log(X)
console.log(X[19])
console.log(X[59])
console.log(X[99])
console.log(X[139])
console.log(X[179])
console.log(X[219])
let sum = 20*X[19] + 60*X[59] + 100*X[99] + 140*X[139] + 180*X[179] + 220*X[219]
console.log(sum)

// PART 2
let str = '';
let crt = 0;
for (let i = 0; i < X.length; i++) {
    if (crt === 40) {
        str = str + '\n'
        crt = 0;
    }
    let sprite = X[i];
    // console.log(reg)
    if (crt >= sprite- 1 && crt <= sprite + 1) {
        str = str + "#";
    } else str = str + ".";
    crt++;

    
}

console.log(str)
let test = str.split('\n')
console.log(test[0].length)