/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const initialVal=s.toLowerCase().replace(/[^a-z0-9]/g,'')
    let i=0;
    let j=initialVal.length-1;
    let flag=true;
    while(i<=Math.floor(initialVal.length/2)){
        if(initialVal[i]===initialVal[j]){
            i++;
            j--;
        }
        else return false
    }
    if(i>initialVal.length/2) return true

};