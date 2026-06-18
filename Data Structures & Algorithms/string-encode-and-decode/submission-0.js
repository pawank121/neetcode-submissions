class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!Array.isArray(strs) || strs.length===0) return ''

        let encode = ''
        for(let str of strs){
            encode+=`${str.length}#${str}`
        }

        return encode
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str==='') return []
        let i=0
        const res=[]
        while (i<str.length){
            let lenStr=''
            while(i< str.length && str[i]!='#'){
                lenStr+=str[i]
                i++
            }
            i++
            const len = Number(lenStr)
            const word = str.slice(i, i+len)
            res.push(word)
            i+=len
        }

        return res
    }
}
