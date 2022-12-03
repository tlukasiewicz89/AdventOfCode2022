const fs = require('fs');

const arr = [];
let curr = 0;
const lines = fs
    .readFileSync("./input.txt", { encoding: 'utf8' })
    .split("\n")
    .forEach(char => {
        if (char === '') {
            arr.push(curr);
            curr = 0;
        } else curr += parseInt(char)
    });
arr.sort((a, b) => a - b);
console.log(arr.slice(-3).reduce((a,b)=>a+b));
