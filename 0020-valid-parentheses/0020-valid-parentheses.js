/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj={
        ")":"(",
        "}":"{",
        "]":"["
    }
    let stack=[]
    for(let item of s){
        if(item==="(" || item==="{" || item==="["){
            stack.push(item)
        }
        else {
            if(stack.pop()!==obj[item]){
                return false;
            }
        }
    }
    if(stack.length===0) return true
    else return false
};