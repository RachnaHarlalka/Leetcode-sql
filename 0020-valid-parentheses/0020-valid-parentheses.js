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
    let flag=true;
    let stack=[]
    if(s.length===1) return false
    s.split("").forEach((item)=>{
        if(item==="(" || item==="{" || item==="["){
            stack.push(item)
        }
        else {
            if(stack.length===0) {
                flag=false;
                return false;
            }
            const top=stack[stack.length-1];
            if(top!==obj[item]){
                flag=false;
                return false;
            }
            else stack.pop()
        }
    })
    if(stack.length===0 && flag) return true
    else return false
};