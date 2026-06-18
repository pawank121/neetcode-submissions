class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        foundDuplicates=False
        hash = {}
        for n in nums:
            if n in hash:
                foundDuplicates= True
                break
            else:
                hash[n] = 1
        return foundDuplicates

