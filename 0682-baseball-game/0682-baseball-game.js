/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
     let stack=[];
        operations.forEach((item)=>{
            switch(item){
                case "+":{
                    stack.push(stack[stack.length-1]+stack[stack.length-2]);
                    break;
                }
                case "D":{
                    stack.push(2*Number(stack[stack.length-1]));
                    break;
                }
                case "C":{
                    stack.pop();
                    break;
                }
                default:{
                    stack.push(Number(item));
                    break;
                }
            }

        })
        const sum=stack.reduce((acc,curr)=>{
            acc=acc+curr;
            return acc;
        },0)

        return sum;
};