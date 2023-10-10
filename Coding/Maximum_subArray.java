/* 
Q. Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
	
Example 1:
	Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
	Output: 6
	Explanation: [4,-1,2,1] has the largest sum = 6.

Example 3:
	Input: nums = [5,4,-1,7,8]
	Output: 23
*/
public class MaximumSubarraySum {

    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        // Loop through the array starting from the second element
        for (int i = 1; i < nums.length; i++) {
            // Calculate the maximum between the current element and the current element + currentSum
            currentSum = Math.max(nums[i], currentSum + nums[i]);

            // Update the maxSum if the currentSum is greater
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int maxSubArraySum = maxSubArray(nums);
        System.out.println("Maximum Subarray Sum: " + maxSubArraySum);
    }
}

