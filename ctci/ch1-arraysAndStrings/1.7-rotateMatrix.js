import util from 'util';

//O(n2)
function rotateMatrix(matrix) {
    if (!matrix || matrix.length === 0) {
        throw new Error('invalid matrix');
    }

    if (matrix.length < 2) {
        return matrix; // no need to do anything to rotate a 1,1 matrix
    }
    const newMatrix = [];
    const numberOfRows = matrix.length;
    matrix.forEach((row, i) => {
        let jmax = numberOfRows - 1;
        row.forEach((cell, j) => {
            let newI = j;
            let newJ = jmax - i;

            if (!newMatrix[newI]) {
                newMatrix[newI] = [];
            }
            newMatrix[newI][newJ] = cell
        });
    })
    return newMatrix;
}


let tests = [
    [
        [[1, 2], [3, 4]],
        [[3, 1], [4, 2]],
        [[4, 3], [2, 1]],
        [[2, 4], [1, 3]]
    ],
    [
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        [[7, 4, 1], [8, 5, 2], [9, 6, 3]],
        [[9, 8, 7], [6, 5, 4], [3, 2, 1]],
        [[3, 6, 9], [2, 5, 8], [1, 4, 7]]
    ],
    [
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ],
        [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ],
        [
            [16, 15, 14, 13],
            [12, 11, 10, 9],
            [8, 7, 6, 5],
            [4, 3, 2, 1]
        ],
        [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13]
        ]
    ]
]



tests.forEach(test => {
    let result = rotateMatrix(test);
    console.log(util.inspect(result,
        { showHidden: false, depth: null, colors: true })
    );
})