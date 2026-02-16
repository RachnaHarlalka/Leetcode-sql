/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let suffixArr = [];
    const result = []
    result[0] = 1
    for(let i=1;i<nums.length;i++){
        result[i]=result[i-1]*nums[i-1];
    }
    let suffix = 1;
    for(let i=nums.length-2;i>=0;i--){
        suffix =  suffix * nums[i+1]
        result[i]*= suffix 
    }
    console.log({result})
    return result

};