const fs = require('fs');


const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n')

    //{
        // [ZN]
        // [MCD]
        // [P]
        // }
        
        //create the stacks
const stacks = {};
let j;
for (j = 0; j < input.length; j++) {
    if (input[j][1] !== " " && !isNaN(input[j][1])) break
    let row = input[j]
    let count = 1;
    for (let i = 1; i < row.length; i +=4) {
        // console.log(row[i])
        if (!stacks[count]) stacks[count] = [];
        if (row[i] !== ' ') stacks[count].unshift(row[i])
        count++;
    }
    count = 1
}

// parsing the data part 1!!!!
// for (j+=2; j < input.length; j++) {
//     console.log(input[j]);
//     let row = input[j].split(' ');
//     let count = parseInt(row[1]);
//     let moveFrom = row[3];
//     let moveTo = row[5];
//     console.log(count, moveFrom, moveTo)
//     // moving them boxes
//     for (let i = 0; i < count; i++) {
//         let popped = stacks[moveFrom].pop();
//         stacks[moveTo].push(popped);
//     }
// }
//part 2
for (j+=2; j < input.length; j++) {
    // console.log(input[j]);
    let row = input[j].split(' ');
    let count = parseInt(row[1]);
    let moveFrom = row[3];
    let moveTo = row[5];
    // console.log(count, moveFrom, moveTo)
    // moving them boxes
    let temp = []
    for (let i = 0; i < count; i++) {
        let popped = stacks[moveFrom].pop();
        temp.unshift(popped);
    }
    // console.log('temp', temp)
    stacks[moveTo] = stacks[moveTo].concat(temp);
    temp = [];
}

//get last value in stack and add to a string
let str = '';
for (let key in stacks) {
    str += stacks[key][stacks[key].length - 1]
}
console.log(stacks)
console.log(str)