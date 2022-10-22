/* 
Q. Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
	
Example 1:
	Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
	Output: 6
	Explanation: [4,-1,2,1] has the largest sum = 6.

Example 3:
	Input: nums = [5,4,-1,7,8]
	Output: 23
Question added by Adityakr1410
*/
public class Maximum_subArray {

	static public int maxSubArray(int[] nums) 
    {
        int sum = 0;
        int max = nums[0];

        int i= 0;
        while(i<nums.length)   
        {
        	sum += nums[i];
            max = Math.max(max,sum);
            if(sum<0) sum= 0;
            i++;
        }
        return max;
    }
	
	public static void main(String[] args) 
	{
		int arr [] = {-2,1,-3,4,-1,2,1,-5,4}; // change array for different inputs
		System.out.println( maxSubArray(arr) );

	}

}
