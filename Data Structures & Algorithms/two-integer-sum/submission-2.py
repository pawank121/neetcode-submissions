class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        l=0
        s=0
        while l < n:
            h=l+1
            while h < n:
                s=nums[l] + nums[h]
                if s == target:
                    break
                h+=1
            if s == target:
                break
            l+=1

        return [l,h]
        