const input = require('fs')
    .readFileSync('./11.input.txt', 'utf-8')
    .split('\n')
    .map(x => x.split(''));

const w = input[0].length;
const h = input.length;

const deltas = [0, 1, 2, 3, 4, 5, 6, 7]
    .map(x => x * Math.PI/4)
    .map(x => [Math.round(Math.sin(x)), Math.round(Math.cos(x))])

const traceRay = (grid, x, y, u, v) => {
    x += u;
    y += v;
    if (x<0 || y<0 || x>=w || y>=h) {
        return '.'
    }
    if (grid[y][x] !== '.') {
        return grid[y][x];
    }
    return traceRay(grid, x, y, u, v);
}

const getAdjacent = (grid, x, y) => deltas
    .map(([u, v]) => [x+u, y+v])
    .filter(([x, y]) => x>=0 && x<w && y>=0 && y<h)
    .map(([x, y]) => grid[y][x]);

const getVisible = (grid, x, y) => deltas
    .map(([u, v]) => traceRay(grid, x, y, u, v))

const countFull = list => list.filter(x => x==='#').length;
const countAllFull = grid => grid.map(countFull).reduce((a, b) => a + b);

const next = (current, considered, limit=4) => {
    if (current === '#' && countFull(considered)>=limit) {
        return 'L'
    }
    if (current === 'L' && countFull(considered)===0) {
        return '#'
    }
    return current;
}

const update = (considerFn, limit) => grid =>
    grid.map((row, j) =>
        row.map((x, i) =>
            next(x, considerFn(grid, i, j), limit)
        )
    )

const toString = grid => 
    grid.map(x => x.join('')).join('\n');

const runSim = (grid, updateFn) => {
    const newGrid = updateFn(grid);
    if (toString(grid) === toString(newGrid)) {
        return countAllFull(newGrid);
    }
    return runSim(newGrid, updateFn);
}

const answer1 = runSim(input, update(getAdjacent, 4));
console.log(answer1);

const answer2 = runSim(input, update(getVisible, 5));
console.log(answer2);