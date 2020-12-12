const input = require('fs')
    .readFileSync('./12.input.txt', 'utf-8')
    .split('\n')
    .map(x => [x[0], parseInt(x.slice(1))])

const actions1 = {
    N: ({x, y, r}, n) => ({ x, y: y+n, r }),
    S: ({x, y, r}, n) => ({ x, y: y-n, r }),
    E: ({x, y, r}, n) => ({ x: x+n, y, r }),
    W: ({x, y, r}, n) => ({ x: x-n, y, r }),
    L: ({x, y, r}, n) => ({ x, y, r: r-n }),
    R: ({x, y, r}, n) => ({ x, y, r: r+n }),
    F: ({x, y, r}, n) => ({ x: x + n*Math.cos(r*Math.PI/180), y: y - n*Math.sin(r*Math.PI/180), r }),
};

const rotate = (wx, wy, r) => ({
    wx: wx*Math.cos(r) - wy*Math.sin(r),
    wy: wx*Math.sin(r) + wy*Math.cos(r),
});

const actions2 = {
    N: ({x, y, wx, wy}, n) => ({ x, y, wx, wy: wy+n }),
    S: ({x, y, wx, wy}, n) => ({ x, y, wx, wy: wy-n }),
    E: ({x, y, wx, wy}, n) => ({ x, y, wx: wx+n, wy }),
    W: ({x, y, wx, wy}, n) => ({ x, y, wx: wx-n, wy }),
    L: ({x, y, wx, wy}, n) => ({ x, y, ...rotate(wx, wy, n*Math.PI/180) }),
    R: ({x, y, wx, wy}, n) => ({ x, y, ...rotate(wx, wy, -n*Math.PI/180) }),
    F: ({x, y, wx, wy}, n) => ({ x: x+wx*n, y: y+wy*n, wx, wy }),
};

const run = (instr, actions, init) => {
    const result = instr.reduce(
        (state, [a, n]) => actions[a](state, n),
        init
    );
    return Math.round(Math.abs(result.x) + Math.abs(result.y))
};

const answer1 = run(input, actions1, { x: 0, y: 0, r: 0 });
console.log(answer1);

const answer2 = run(input, actions2, { x: 0, y: 0, wx: 10, wy: 1 });
console.log(answer2);
