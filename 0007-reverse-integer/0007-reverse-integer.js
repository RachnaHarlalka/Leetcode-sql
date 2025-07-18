/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let original=x;
    let r;
    let newNumber=0;
    if(x.toString()[0]==="-"){
        x=x.toString().slice(1);
        x=JSON.parse(x)
    }
    while(x>0){
        r=x%10;
        x=(x/10).toString().split(".")[0];
        console.log(r)
        newNumber=newNumber*10+r;
    }
    console.log(newNumber,original)
    if(newNumber > 2 ** 31 - 1) return 0;
    if(original.toString()[0]==="-"){
        console.log("inside if")
        return JSON.parse(`-${newNumber}`);
    }
    else {
        console.log("inside else");
        return newNumber;
    }
};