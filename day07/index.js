const fs = require('fs');

const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n');


let files = {'/': {}};
let current = files;
let history = [];
for (let i = 0; i < input.length; i++) {
    // console.log('current command', input[i])
    let line = input[i];
    if (line[0] === '$') {
        line = line.split(' ');
        let cmd = line[1];
        let dir = line[2];
        // console.log('cmd,dir:', cmd, dir)
        if (cmd === 'cd') {
            if (dir === '..') {
                //revert history
                history.pop();
                current = history[history.length - 1];
                continue;
            } else {
                current = current[dir];
                history.push(current);
                // console.log('pushed', current)
                continue;
            }
        }
        if (cmd === 'ls') {
            // function to find key and add shit
            while (input[i+1] && input[i+1][0] !== '$') {
                i++;
                // console.log('looping on', input[i])
                let newDir = input[i].split(' ');
               if (newDir[0] === 'dir' ) {
                current[newDir[1]] = {};
               } else {
                current[newDir[1]] = parseInt(newDir[0]);
               }
            }
        }
    }
}

const sizes = {};
// loop over the files object and find the size of every directoy
function deepLook (obj) {
    let sum = 0;
    for (let key in obj) {
        // console.log(key);
        if (typeof obj[key] === 'object') {
            sizes[key] = deepLook(obj[key]);
            sum += sizes[key];
        } else {
            sum += obj[key];
        }
    }
    return sum;
}

//lol run it
deepLook(files);
// last part find the sum of all directories with sum < 100k
let result = 0;
for (let key in sizes) {
    if (sizes[key] <= 100000) {
        result += sizes[key]
    };
}

console.log(JSON.stringify(files, null, 2));
// console.log(history);
// console.log(sizes)
console.log(result);
//1338139 is too low