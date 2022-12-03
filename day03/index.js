const fs = require('fs');

let sum = 0;
const input = fs
    .readFileSync("./input.txt", { encoding: 'utf8' })
    .split('\n');

    for (let i = 0; i < input.length; i += 3) {
        let obj1 = {};
        let obj2 = {};
        for (let char of input[i]) {
            obj1[char] ? null : obj1[char] = 1;
        }
        for (let char of input[i+1]) {
            obj2[char] ? null : obj2[char] = 1;
        }
        for (let char of input[i+2]) {
            if (obj1[char] && obj2[char]) {
                // console.log(char)
                if (char.charCodeAt(0) > 96) {
                    sum += char.charCodeAt(0) - 96
                } else {
                    sum += char.charCodeAt(0) - 38
                }
                break;
            }
        }
       
    }
    
console.log(sum)