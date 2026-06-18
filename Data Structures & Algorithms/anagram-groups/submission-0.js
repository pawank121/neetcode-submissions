class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(!Array.isArray(strs)|| strs.length==0) return []

        const groups = {}
        for (let str of strs){
            const key = [...str].sort().join("")
            if(!groups[key]) groups[key]=[]
            groups[key].push(str)
        }

        return Object.values(groups)
    }
}
