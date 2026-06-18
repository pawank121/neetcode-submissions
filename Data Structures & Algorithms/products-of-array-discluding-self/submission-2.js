class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalP;
        let z = 0;
        for (const n of nums) {
            if (n == 0) {
                z++;
                continue;
            }
            totalP = (totalP || 1) * n;
        }
        const res = [];
        for (const n of nums) {
            if (n == 0) {
                if (z > 1) res.push(0);
                else res.push(totalP);
            } else {
                if (z > 0) res.push(0);
                else res.push(totalP / n);
            }
        }

        return res;
    }
}
