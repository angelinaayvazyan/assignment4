const tester1 = require('./multiply_utils.js');

const matrix1 = [[5,2],[3,1]]
const matrix2 = [[7,6],[4,8]]
tester1.multiplyMatrices(matrix1, matrix2);
console.log(tester1.multiplyMatrices(matrix1, matrix2));

const tester2 = require('./sum_utils.js');
tester2.matrixSum(matrix1,matrix2);
console.log(tester2.matrixSum(matrix1,matrix2));

const tester3 = require('./sum_eachrow_utils.js');
const initial_matrix = [[1,1], [2,2]];
console.log(tester3.sumofeachRow(initial_matrix));