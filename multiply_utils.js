module.exports = {
multiplyMatrices: function (matrix1, matrix2) {
    let result = [];
    let rows1 = matrix1.length;
    let columns1 = matrix1[0].length;
    let rows2 = matrix2.length;
    let columns2 = matrix2[0].length;
    for (let i = 0; i < rows1; i++) {
        result[i] = [];
        for (let j = 0; j < columns2; j++) {
            let sum = 0;
            for (let g = 0; g < columns1; g++) {
            sum = sum + matrix1[i][g] * matrix2[g][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
}
// let matrix1 = [[1,2],[3,4]]
// let matrix2 = [[5,6],[7,8]]

// let mResult = multiplyMatrices(matrix1, matrix2);

// console.log(mResult);
// }