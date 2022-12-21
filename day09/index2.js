// PART 2

const fs = require('fs');

const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n')

// create coords for head and tails on a grid starting at 0,0
let head = [1,1];
let tail = [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]];
let visited = {
    '1,1': 1
}
input.forEach(move =>{
    move = move.split(' ')
    let direction = move[0];
    let spaces = move[1]
    // console.log('move is:', move)
    for (let i = 0; i < spaces; i++) {
        
        switch (direction) {
            case "R":
                head[0]++;
                // console.log('head', head)
                //check each knot if it moved
                if (!isTouching(head, tail[0])) {
                    tail[0] = makeTouch(head, tail[0], direction);
                    for (let j = 1; j <= 8; j++) {
                        if (!isTouching(tail[j-1], tail[j])) {
                            tail[j] = makeTouch(tail[j-1], tail[j], direction)
                        }
                    }
                } 
                visited[tail[8]] = true;
                
                break;

            case "U":
                head[1]++;
                if (!isTouching(head, tail[0])) {
                    tail[0] = makeTouch(head, tail[0], direction);
                    for (let j = 1; j <= 8; j++) {
                        if (!isTouching(tail[j-1], tail[j])) {
                            tail[j] = makeTouch(tail[j-1], tail[j], direction)
                        }
                    }
                }
                visited[tail[8]] = true;
                break;


            case "L":
                head[0]--;
                // console.log('head', head)
                if (!isTouching(head, tail[0])) {
                    tail[0] = makeTouch(head, tail[0], direction);
                    for (let j = 1; j <= 8; j++) {
                        if (!isTouching(tail[j-1], tail[j])) {
                            tail[j] = makeTouch(tail[j-1], tail[j], direction)
                        }
                    }
                }
            visited[tail[8]] = true;
                break;

            case "D":
                head[1]--;
                // console.log('head', head)
                if (!isTouching(head, tail[0])) {
                    tail[0] = makeTouch(head, tail[0], direction);
                    for (let j = 1; j <= 8; j++) {
                        if (!isTouching(tail[j-1], tail[j])) {
                            tail[j] = makeTouch(tail[j-1], tail[j], direction)
                        }
                    }
                }
                visited[tail[8]] = true;
                break;
            default:
                break
        }
        //switch ends
        // console.log("Tail:", tail, "Head:", head )
    }
        
})
console.log("visted", visited)
console.log('tail', tail)
console.log('length of visited', Object.keys(visited).length)
// 2566 is too high 
// console.log(isTouching([0,0], [0,0]))

function isTouching (head, tail) {
    //check if same position
    if (JSON.stringify(head) === JSON.stringify(tail)) {
        return true
    }
    //check if diagnally 1 space
    if (Math.abs(head[0]- tail[0]) <= 1 && Math.abs(head[1]- tail[1]) <= 1) {
        return true
    }
    return false
}

function makeTouch(head, tail, dir) {
    //check horizontal or vertical
    // console.log(head, tail)
    if (head[0] === tail[0] || head[1] === tail[1]) {
        if (isTouching(head, [tail[0]+1, tail[1]])) return [tail[0]+1, tail[1]];
        if (isTouching(head, [tail[0], tail[1]+1])) return [tail[0], tail[1]+1];
        if (isTouching(head, [tail[0]-1, tail[1]])) return [tail[0]-1, tail[1]];
        if (isTouching(head, [tail[0], tail[1]-1])) return [tail[0], tail[1]-1];
        // if (dir === 'U') {
        //     return [tail[0], tail[1] + 1]
        // } else if (dir === "D") {
        //     return [tail[0], tail[1] - 1]
        // } else if (dir === "R") {
        //     return [tail[0] + 1, tail[1]]
        // } else if (dir === "L") {
        //     return [tail[0] - 1, tail[1]]
        // }
    } else
    // else it is diagonal
    // if (dir === 'U') {
    //     return [head[0], head[1] - 1]
    // } else if (dir === "D") {
    //     return [head[0], head[1] + 1]
    // } else if (dir === "R") {
    //     return [head[0]-1, head[1]]
    // } else if (dir === "L") {
    //     return [head[0]+1, head[1]]
    // }
    if (isTouching(head, [tail[0]+1, tail[1]+1])) return [tail[0]+1, tail[1]+1];
    if (isTouching(head, [tail[0]+1, tail[1]-1])) return [tail[0]+1, tail[1]-1]
    if (isTouching(head, [tail[0]-1, tail[1]+1])) return [tail[0]-1, tail[1]+1]
    if (isTouching(head, [tail[0]-1, tail[1]-1])) return [tail[0]-1, tail[1]-1]
}


// console.log(input);