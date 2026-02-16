/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0];
    let vote = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]===majority){
            vote++
        }
        else {
            vote--
            if(vote<0){
                majority=nums[i]
            }
        }
    }
    return majority

};