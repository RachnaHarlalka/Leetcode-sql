/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    let myMap=new Map()
    for(let i=0;i<nums.length;i++){
        if(myMap.get(nums[i])!==undefined && 
        Math.abs(myMap.get(nums[i])-i)<=k){
           return true;
        }
        else myMap.set(nums[i],i);
    }
    console.log({myMap})
    return false;
};