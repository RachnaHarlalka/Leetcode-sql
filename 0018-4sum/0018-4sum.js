/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = new Set()
   nums.sort((a,b)=>a-b);
   for(let i=0;i<nums.length;i++){
    if(i>0 && nums[i]===nums[i-1]) continue
    for(let j=i+1;j<nums.length;j++){
        if(j>i+1 && nums[j]===nums[j-1]) continue
        let k=j+1;
        let l = nums.length-1;
        while(k<l){
            if(k>j+1 && nums[k]===nums[k-1] && k<l) k++
            if(nums[i]+nums[j]+nums[k]+nums[l]===target){
                const quad = [nums[i],nums[j],nums[k],nums[l]];
                console.log({quad}, quad.toString())
                result.add(quad.toString())
                k++;
                l--
            }
            else if(nums[i]+nums[j]+nums[k]+nums[l]<target){
                k++;
            }
            else l--
        }
    }
   }
   console.log({result})
   return Array.from(result).map((item)=>item.split(",").map(Number))
};