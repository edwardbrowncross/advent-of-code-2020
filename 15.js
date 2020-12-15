const input = require('fs')
    .readFileSync('./15.input.txt', 'utf-8')
    .split(',');

const run = (start, n) => {
    let turn = start.length;
    const lastSeen = new Map(
        start.map((x,i) => [parseInt(x), i+1])
    );
    let prev = start[start.length-1];
    while (turn < n) {
        const next = lastSeen.has(prev) ? turn - lastSeen.get(prev) : 0;
        lastSeen.set(prev, turn);
        turn++;
        prev = next;
    }
    return prev
}

const answer1 = run(input, 2020);
console.log(answer1);

const answer2 = run(input, 30000000);
console.log(answer2);