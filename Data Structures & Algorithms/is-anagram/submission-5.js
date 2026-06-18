class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hs = {}
        if(s.length!=t.length) return false
        for(let i=0;i<s.length;i++){
            const ch = s[i]
            hs[ch]=(hs[ch]||0) + 1
        }
        for(let i=0;i<t.length;i++){
            const ch = t[i]
            if(!hs[ch]) return false
            hs[ch]--
        }
        return true
    }
}
