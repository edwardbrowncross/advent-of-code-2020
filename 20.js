const input = require('fs')
    .readFileSync('./20.test.txt', 'utf-8')
    .split('\n\n')
    .map(t => ({
        id: parseInt(t.substr(5, 4)),
        tile: t.substr(t.indexOf('\n')+1)
            .split('\n')
            .map(r =>
                r.split('').map(p =>
                    p === '#' ? 1 : 0
                )
            )
    }));

const render = tile => tile.map(x => x.join('')).join('\n');

const flipX = tile => tile.map(x => [...x].reverse());
const flipY = tile => [...tile].reverse().map(x => [...x]);
const flipXY = tile => tile.map(x => [...x].reverse()).reverse();
const transpose = tile => tile[0].map((_, i) => tile.map(x => x[i]));
const identity = tile => tile;
const compose = (fn1, fn2) => tile => fn1(fn2(tile));

const transforms = [
    identity,
    flipX,
    flipY,
    flipXY,
    transpose,
    compose(transpose, flipX),
    compose(transpose, flipY),
    compose(transpose, flipXY),
];

const binary = row => parseInt(row.join(''), 2);
const edgeNums = tile => [
    binary(tile[0]), //top
    binary(transpose(tile)[9]), //right
    binary(tile[9]), //bottom
    binary(transpose(tile)[0]), //left
];

const allEdgeNums = tile => [
    tile,
    flipXY(tile),
].flatMap(edgeNums);

const edgeNumCounts = input
    .flatMap(({ tile }) => allEdgeNums(tile))
    .reduce((c, n) => {
        if (c.has(n)){
            c.set(n, c.get(n)+1);
        } else {
            c.set(n, 1);
        }
        return c;
    }, new Map());

const sideIsEdge = num => edgeNumCounts.get(num) === 1;

const corners = input
    .filter(({ tile }) => allEdgeNums(tile).filter(sideIsEdge).length === 4);

const answer1 = corners
    .map(({ id }) => id)
    .reduce((a, b) => a * b);
console.log(answer1);


const isNotEqual = t1 => t2 => {
    const e1 = allEdgeNums(t1);
    const e2 = allEdgeNums(t2);
    return !e1.every(e => e2.includes(e));
}

const solveNeighbor = dir => tiles => tile => {
    const num = edgeNums(tile)[dir];
    const match = tiles
        .filter(isNotEqual(tile))
        .find(tile => allEdgeNums(tile).includes(num));
    const trans = transforms.find(fn => edgeNums(fn(match))[(dir + 2) % 4] === num);
    return trans(match);
}

const solveRight = solveNeighbor(1);
const solveDown = solveNeighbor(2);

const cumulate = (size, fn, init) => {
    let r = [init];
    for (let i=1; i<size; i++) {
        r[i] = fn(r[i-1]);
    }
    return r;
};

const solve = (tiles, topLeft) => {
    const s = Math.sqrt(tiles.length);
    return cumulate(s, solveDown(tiles), topLeft)
        .map(t => cumulate(s, solveRight(tiles), t));
}

const crop = tile => tile
    .slice(1, tile.length - 1)
    .map(x => x.slice(1, x.length-1));

const join = grid => grid.flatMap((row, u) =>
        row[0].map((_, i) =>
            row.reduce((all, tile) => all.concat(tile[i]), [])
        )
    );

const monsterCoords = 
`                  # 
#    ##    ##    ###
 #  #  #  #  #  #   `
    .split('\n')
    .flatMap((r, i) =>
        r.split('')
            .reduce((all, p, j) =>
                    p === '#' ? [...all, [i, j]] : all,
                []
            )
    );

const isSeaMonsterAt = (image, i, j) =>
    monsterCoords
        .every(([u, v]) => image[i+u][j+v] === 1);

const countSeaMonsters = image => {
    let count = 0;
    for (let i=0; i<image.length-3; i++) {
        for (let j=0; j<image.length-20; j++) {
            if (isSeaMonsterAt(image, i, j)) {
                count++;
            }
        }
    }
    return count;
}

const topLeft = transforms
    .map(fn => fn(corners[0].tile))
    .find(tile => sideIsEdge(edgeNums(tile)[0]) && sideIsEdge(edgeNums(tile)[3]));

const image = join(
    solve(input.map(t => t.tile), topLeft)
        .map(row => row.map(crop))
);

const numSeaMonsters = transforms
    .map(fn => countSeaMonsters(fn(image)))
    .find(n => n > 0);

const answer2 = image.flat().filter(n => n === 1).length - numSeaMonsters*15;
console.log(answer2);