/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0;
    let maxWindow=0;
    let myMap=new Map();
    let maxF=0;
    for(let r=0;r<s.length;r++){
        if(myMap.get(s[r])) myMap.set(s[r],myMap.get(s[r])+1);
        else myMap.set(s[r],1);
        maxF=Math.max(maxF,myMap.get(s[r]));
        let windowLength=r-l+1;
        if(windowLength-maxF>k){
            myMap.set(s[l],myMap.get(s[l])-1);
            l++;
        }
        windowLength=r-l+1;
        maxWindow=Math.max(maxWindow,windowLength);
    }
    return maxWindow;
};