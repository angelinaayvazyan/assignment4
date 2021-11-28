module.exports = {
     matrixSum: function(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length && i < matrix2.length; i++) {
         result[i]=[];
        let sum = 0;
        for (let j = 0; j < matrix1[0].length && i < matrix2[0].length; j++) {
          sum = matrix1[i][j] + matrix2[i][j];
            result[i][j]= sum;
        }
    }
    return result;
    }
}
// let matrix1 = [[1,2],[3,4]]
// let matrix2 = [[5,6],[7,8]]

// let finalresult = matrixSum(matrix1, matrix2);

// console.log(finalresult);
