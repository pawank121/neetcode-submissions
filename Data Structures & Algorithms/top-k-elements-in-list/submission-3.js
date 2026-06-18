class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {}
        for (const n of nums){
            hash[n] = (hash[n] || 0) + 1
        }

        const res = Object.keys(hash).sort((a, b) => hash[b]-hash[a]);
	    return res.slice(0, k);

    }
}
