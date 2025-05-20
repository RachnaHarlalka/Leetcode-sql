/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // const obj={};
    // for(let i=0;i<nums.length;i++){
    //     const diff=target-nums[i];
    //     if(obj[diff]===undefined){
    //         obj[nums[i]]=i;
    //     }
    //     else {
    //         console.log(i,obj[diff]);
    //         return [i,obj[diff]];
    //     }
    // }
       const unique={};

        nums.forEach((item,idx)=>{
            unique[idx]=item
        })

        for(let i=0;i<nums.length;i++){
            let check=nums[i];
            let numToFind=target-check;
            for(let j=i+1;j<nums.length;j++){
                if(unique[j]===numToFind)
                    return [i,j]
            }
        }
       
};