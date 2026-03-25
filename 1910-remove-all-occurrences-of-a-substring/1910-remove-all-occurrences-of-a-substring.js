/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.indexOf(part)!=-1){
        let start = s.indexOf(part);
        s = s.slice(0,start)+s.slice(start+part.length)
    }
    return s
};