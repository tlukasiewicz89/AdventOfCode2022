const fs = require('fs');

const input = fs
    .readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n')

// create coords for head and tails on a grid starting at 0,0
let head = [1,1];
let tail = [1,1];
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
                if (!isTouching(head, tail)) {
                    tail = makeTouch(head, tail, direction)
                    visited[tail] ? visited[tail]++ : visited[tail] = 1;
                }
                break;
            case "U":
                head[1]++;
                // console.log('head', head)
                if (!isTouching(head, tail)) {
                    tail = makeTouch(head, tail, direction)
                    visited[tail] ? visited[tail]++ : visited[tail] = 1;
                }
                break;
            case "L":
                head[0]--;
                // console.log('head', head)
                if (!isTouching(head, tail)) {
                    tail = makeTouch(head, tail, direction)
                    visited[tail] ? visited[tail]++ : visited[tail] = 1;
                }
                break;
            case "D":
                head[1]--;
                // console.log('head', head)
                if (!isTouching(head, tail)) {
                    tail = makeTouch(head, tail, direction)
                    visited[tail] ? visited[tail]++ : visited[tail] = 1;
                }
                break;
            default:
                break
        }
        //switch ends
        console.log("Head:", head, "Tail:", tail,  )
    }
        
})
console.log("visted", visited)
console.log('length of visited', Object.keys(visited).length)
// 3265 is too low
// console.log(isTouching([0,0], [0,0]))

function isTouching (head, tail) {
    //check if same position
    if (JSON.stringify(head) === JSON.stringify(tail)) {
        return true
    }
    //check if diagnally / horizontally 1 space
    if (Math.abs(head[0]- tail[0]) <= 1 && Math.abs(head[1]- tail[1]) <= 1) {
        return true
    }
    return false
}

function makeTouch(head, tail, dir) {
    //check horizontal or vertical
    console.log(head, tail)
    if (head[0] === tail[0] || head[1] === tail[1]) {
        if (dir === 'U') {
            return [tail[0], tail[1] + 1]
        } else if (dir === "D") {
            return [tail[0], tail[1] - 1]
        } else if (dir === "R") {
            return [tail[0] + 1, tail[1]]
        } else if (dir === "L") {
            return [tail[0] - 1, tail[1]]
        }
    } else
    // else it is diagonal
    if (dir === 'U') {
        return [head[0], head[1] - 1]
    } else if (dir === "D") {
        return [head[0], head[1] + 1]
    } else if (dir === "R") {
        return [head[0]-1, head[1]]
    } else if (dir === "L") {
        return [head[0]+1, head[1]]
    }
}




// console.log(input);