const input = require('fs')
    .readFileSync('./24.input.txt', 'utf-8')
    .replace(/nw/g, 'a')
    .replace(/ne/g, 'b')
    .replace(/se/g, 'c')
    .replace(/sw/g, 'd')
    .split('\n')
    .map(x => x.split(''));

const dirMap = {
    'a': [-1,  0,  1],
    'b': [ 0,  1,  1],
    'e': [ 1,  1,  0],
    'c': [ 1,  0, -1],
    'd': [ 0, -1, -1],
    'w': [-1, -1,  0],
};
const dirs = Object.values(dirMap);

const addDir = ([x, y, z], [u, v, w]) => [x+u, y+v, z+w];
const coordToString = p => p.join(',');
const stringToCoord = s => s.split(',').map(x => parseInt(x));
const count = (m, v) => {
    m[v] = (m[v] || 0) + 1;
    return m;
}

const coordCounts = input
    .map(x => x
        .map(d => dirMap[d])
        .reduce(addDir, [0, 0, 0])
    )
    .map(coordToString)
    .reduce(count, {});

const blackCoords = Object.entries(coordCounts)
    .filter(([p, c]) => c % 2 === 1)
    .map(([k, v]) => k)
    .map(stringToCoord);

const answer1 = blackCoords.length;
console.log(answer1);

const adjacent = p => dirs.map(d => addDir(p, d));

const tick = coords => {
    const black = new Set(coords.map(coordToString));
    const counts = coords
        .flatMap(adjacent)
        .map(coordToString)
        .reduce(count, {});
    return Object.entries(counts)
        .filter(([p, n]) =>
            black.has(p) ? n === 1 || n === 2 : n === 2
        )
        .map(([k, v]) => k)
        .map(stringToCoord);
}

const sim = (coords, n) => {
    for (let i=0; i<n; i++) {
        coords = tick(coords);
    }
    return coords;
}

const answer2 = sim(blackCoords, 100).length;
console.log(answer2);