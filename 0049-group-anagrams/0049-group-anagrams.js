/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    for(let i=0;i<strs.length;i++){
        const key = strs[i].split("").sort().join("");
        console.log({key},strs[i])
        if(obj[key] != undefined){
            obj[key].push(strs[i])
        }
        else obj[key] = [strs[i]]
    }
    console.log({obj})
    return Object.values(obj)
};