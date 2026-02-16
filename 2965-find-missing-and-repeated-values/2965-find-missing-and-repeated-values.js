/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const ans = [];
    const obj = {};
    const n = grid.length

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            const item = grid[i][j]
            if(obj[item] !== undefined){
                obj[item]+=obj[item]
            }
            else obj[item]=1
        }
    }
    console.log({obj})
    for(let i=1;i<=n*n;i++){
        if(obj[i]>1){
            ans[0]=i
        }
        if(obj[i] === undefined)
            ans[1]=i
    }
    return ans
};