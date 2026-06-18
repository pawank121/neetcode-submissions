class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!Array.isArray(nums) || nums.length === 0) return 0;
        nums = new Set(nums);
        nums = [...nums]
        if (nums.length == 1) return 1;
        nums.sort((a, b) => a - b);

        let l = 0;
        let h = 1;

        let res = Number.MIN_SAFE_INTEGER;

        while (h < nums.length) {
            while (nums[h] - nums[h - 1] === 1) {
                h++;
                if (h == nums.length) break;
            }
            res = Math.max(res, h - l);
            l = h;
            h++;
        }

        return res;
    }
}
