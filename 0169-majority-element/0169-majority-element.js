/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        const item = nums[i];
        let val = map.get(item)
        if(val!==undefined){
            map.set(item,val+=1)
        }
        else map.set(item,1)
    }
    for(const [key,value] of map){
        if(map.get(key)>=nums.length/2){
            return key
        }
    }
};