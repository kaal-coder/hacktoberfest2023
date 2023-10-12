class Solution {
public:
    int minOperations(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size(); 
        int left = 0;
        int maxCount = 1; 
        int currentCount = 1; 
        for (int right = 1; right < n; ++right) {
if (nums[right] == nums[right - 1]) {
                continue;
            }
            while (nums[right] - nums[left] > n - 1) {

                if(left<n && nums[left+1]==nums[left]){
currentCount++;
}
                left++;
                currentCount--;
            }
            currentCount++;

            maxCount = max(maxCount, currentCount);
        }


        int minOps = n - maxCount;

        return minOps;
    }
};
