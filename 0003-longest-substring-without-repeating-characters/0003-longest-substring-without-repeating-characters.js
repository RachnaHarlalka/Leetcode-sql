/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
//--------------n*n---------------
//     let max=0;
//    for(let i=0;i<s.length;i++){
//     let mySet=new Set();
//     let len;
//     for(let j=i;j<s.length;j++){
//         console.log({mySet});
//         console.log("hellp",mySet.has(s[j]));
//         if(mySet.has(s[j])) break;
//         len=j-i+1;
//         max=Math.max(len,max);
//         mySet.add(s[j]);
//     }
//     console.log({max})
//    }
//    return max;

// ---------n-------------------

let left=0;
let right=0;
let myMap=new Map();
let max=0;
while(right<s.length){
    if(myMap.get(s[right])>=left){
        left=myMap.get(s[right])+1;
        myMap.set(s[right],right)
    }
    myMap.set(s[right],right);
    len=right-left+1;
    max=Math.max(len,max);
    right++;
}
return max;
    
};