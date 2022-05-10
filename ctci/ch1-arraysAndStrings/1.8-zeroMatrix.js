import util from 'util';

const zeroMatrix = (matrix) => {
    if (!matrix || matrix.length === 0) {
        throw new Error('invalid matrix');
    }

    let newMatrix = [];
    let zeroColsIndex = [];
    matrix.forEach((row, i) => {
        newMatrix[i] = [...row]
        row.forEach((cell, j) => {
            if (cell === 0) {
                newMatrix[i] = newMatrix[i].map(c => 0)
                zeroColsIndex.push(j)
                newMatrix = newMatrix.map(r => {
                    r[j] = 0
                    return r
                })
            }
            else if (zeroColsIndex.includes(j)) {
                newMatrix[i][j] = 0
            }
        })
    })

    return newMatrix
}

let tests = [
    [
        [0, 1, 1],
        [1, 1, 1],
        [0, 1, 1],
    ],
    [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    [
        [1, 0, 3],
        [4, 5, 6],
        [7, 0, 9]
    ],
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ],
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 11, 12],
        [13, 14, 15, 0],
        [17, 18, 19, 20]
    ]
]

tests.forEach(test => {
    let result = zeroMatrix(test);
    console.log(util.inspect(result,
        { showHidden: false, depth: null, colors: true })
    )
})