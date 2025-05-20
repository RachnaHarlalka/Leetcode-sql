/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const result=[]
  const mapObj=new Map();
  for(let item of nums){
    mapObj.set(item,(mapObj.get(item)||0)+1)
  }
  console.log(mapObj.entries())
 const newEntries= [...mapObj.entries()].sort(([, a],[ ,b])=>b-a)
 

  const slicedArr=newEntries.slice(0,k)
 
 for (let [a,b] of slicedArr){
    result.push(a)
 }
 return result;
  




    
};