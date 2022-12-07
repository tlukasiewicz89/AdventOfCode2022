const fs = require('fs');

let overlap = 0;
const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n')
    // .map(pair => {
    //     let split = pair.split(',');
    //     return split
    // });

    // input.forEach(pair =>{
    //     console.log(pair);
    //     let num1, num2 = (...pair[0].split('-'))
    // })
    //part 1
    // input.forEach(pair=> {
    //     let pairs = pair.split(',');
    //     let elf1 = pairs[0].split('-');
    //     let elf2 = pairs[1].split('-');
    //     elf1 = elf1.map(str=>parseInt(str));
    //     elf2 = elf2.map(str=>parseInt(str));
    //     // console.log(elf1, elf2)
    //     if (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) {
    //         overlap++
    //     } else
    //     if (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) {
    //         overlap++
    //     }
    // })
    //part2
    input.forEach(pair=> {
        let pairs = pair.split(',');
        let elf1 = pairs[0].split('-');
        let elf2 = pairs[1].split('-');
        elf1 = elf1.map(str=>parseInt(str));
        elf2 = elf2.map(str=>parseInt(str));
        // is 2 inside 4-8
        if (elf1[0] >= elf2[0] && elf1[0] <= elf2[1]) {
            overlap++
        } else
        // is 8 inside 2-6
        if (elf2[0] >= elf1[0] && elf2[0] <= elf1[1]) {
            overlap++
        } 
    })
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8
console.log(overlap);