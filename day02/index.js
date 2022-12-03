const fs = require('fs');


// A X Rock 1
// B Y Paper 2
// C Z Scissors 3

// X = 0
// Y = 3
// Z = 6

let obj = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
};
let totalScore = 0;
const input = fs
    .readFileSync('./input.txt', { encoding: 'utf8' })
    .split('\n')
    .forEach(pair => totalScore += obj[pair]);
    
console.log(totalScore);