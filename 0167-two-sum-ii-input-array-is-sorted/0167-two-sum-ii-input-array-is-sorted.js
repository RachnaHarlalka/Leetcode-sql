/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let obj={}
   for(let i=0;i<numbers.length;i++){
        let num=target-numbers[i];
        if(obj[num]){
            return [obj[num],i+1]
        }
        else obj[numbers[i]]=i+1
   }
};