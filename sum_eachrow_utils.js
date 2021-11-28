  function sumOfArr(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    return sum
}
module.exports = {
     sumofeachRow: function(matrix){
    let returned_arr = [];
     for (let i = 0; i < matrix.length; i++) {
         returned_arr.push(sumOfArr(matrix[i]));
     }
     return returned_arr;
 }
}
// let initial_matrix =  [[1,1], [2,2]];
// console.log(sumofeachRow(initial_matrix));