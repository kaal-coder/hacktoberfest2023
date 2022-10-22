def twoSum(nums, target) :
        for i in range (len(nums)):
            for j in range(i+1,len(nums)):
                if(nums[i]+nums[j]==target):
                    return [i, j]

nums=[20,5,30,10,25,40]
target=15
res=twoSum(nums,target)
print(res)
