/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */


function findInsideRow(matrix,target,row){
    let start = 0
    let end = matrix[0].length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(target===matrix[row][mid]){
            return true
        }
        else if(target<matrix[row][mid]){
            end=mid-1
        }
        else {
            start = mid+1
        }
    }
    return false
}
var searchMatrix = function(matrix, target) {
    const m = matrix.length; //3
    const n = matrix[0].length; //4
    let start = 0; //0
    let end = m-1; //2 //0
    while(start<=end){ 
        let mid = Math.floor((start+end)/2); //1
        if(target>=matrix[mid][0] && target<=matrix[mid][n-1]){
            return findInsideRow(matrix,target,mid)
        }
        else if(target<matrix[mid][0]){
            end=mid-1
        }
        else if(target>matrix[mid][n-1]){
            start=mid+1
        }
    }
    return false
};