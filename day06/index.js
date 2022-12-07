const fs = require('fs');

const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})

let result = 0;

for (let i = 13; i < input.length; i++) {
    if (new Set(input.slice(i - 13, i + 1)).size === 14) {
        result = i + 1;
        break;
    }
}

console.log(result)