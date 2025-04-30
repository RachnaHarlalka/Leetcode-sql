/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const lengthArr=[];
    let count=0;
    nums.forEach((item)=>{
        lengthArr.push(item.toString().length)
    })
    lengthArr.forEach((el)=>{
        if(el%2===0)
            count++;
    })
    return count
};