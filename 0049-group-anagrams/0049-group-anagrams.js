/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj={};
    for(let item of strs){
        const val=item.split("").sort().join("")
        if(obj[val]) obj[val].push(item);
        else obj[val]=[item]
    }

    return Object.values(obj)
};