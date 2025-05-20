/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if(s.length!==t.length) return false;
        const letters={};
        s.split("").forEach((item)=>{
            if(letters[item]) letters[item]++;
            else letters[item]=1
        })

        for(const item of t){
            if(letters[item]) letters[item]--;
            else return false
        }

        Object.keys(letters).map((item)=>{
            if(letters[item]>0) return false
        })
        return true
};