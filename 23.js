const input = require('fs')
    .readFileSync('./23.input.txt', 'utf-8')
    .split('')
    .map(x => parseInt(x));

const toIndexedLinkedList = arr => {
    const head = { n: arr[0] };
    const index = new Map([[arr[0], head]]);
    const tail = arr.slice(1)
        .reduce((prev, n) => {
            const next = { n };
            prev.next = next;
            index.set(n, next); 
            return next;
        }, head);
    tail.next = head;
    return { head, index };
}

const remove = (after, count) => {
    const head = after.next;
    let tail = head;
    for (let i=0; i<count-1; i++) {
        tail = tail.next;
    }
    after.next = tail.next;
    tail.next = null;
    return head;
}

const tail = head => head.next ? tail(head.next) : head;

const toArray = head => head.next ? [head.n, ...toArray(head.next)] : [head.n];

const insert = (after, head) => {
    tail(head).next = after.next;
    after.next = head;
}

const doMove = (index, head) => {
    const sub = remove(head, 3);
    let nextN = head.n - 1 || index.size;
    while (toArray(sub).includes(nextN)) {
        nextN = nextN - 1 || index.size;
    }
    insert(index.get(nextN), sub);
    return head.next;
}

const playGame = (cups, n) => {
    let { head, index } = toIndexedLinkedList(cups);
    for (let i = 0; i < n; i++) {
        head = doMove(index, head);
    }
    return index.get(1);
}

const answer1 = toArray(
    remove(playGame(input, 100), input.length-1)
).join('');
console.log(answer1);

const cups = new Array(1e6)
    .fill(null)
    .map((_, i) => i + 1)
cups.splice(0, input.length, ...input);

const answer2 = toArray(
    remove(playGame(cups, 10e6), 2)
).reduce((a, b) => a * b)
console.log(answer2);