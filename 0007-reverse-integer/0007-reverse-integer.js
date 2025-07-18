/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative=x<0;
    let r;
    let newNumber=0;
    if(x<0){
        x=x.toString().slice(1);
        x=parseInt(x)
    }
    while(x>0){
        r=x%10;
        x=(x/10).toString().split(".")[0];
        console.log(r)
        newNumber=newNumber*10+r;
    }
    if(newNumber > 2 ** (31) - 1) return 0;
    if(isNegative) return newNumber*-1
    else return newNumber
};