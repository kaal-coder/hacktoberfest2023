/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
*/

public class Solution {
    public int singleNonDuplicate(int [] nums) {
        int left = 0;
        int right = nums.length-1;

        while(left < right) {
            int mid = left + (right-left)/2;

            if(nums[mid] == nums[mid-1]) {
                int isEven = right-mid;
                if(isEven % 2 == 0) {
                    right = mid+2;
                }
                else {
                    left = mid+1;
                }
            }
            else if (numsp[mid] == nums[mid+1]) {
                int isEven = right-mid;
                if(isEven % 2 == 0) {
                    left = mid+2;
                }
                else {
                    right = mid-1
                }
            }
            else {
                return nums[mid];
            }
        }
        return nums[left];
    }

    public static void main(String[]args) {
        int [] arr = {1,1,2,3,3,4,4,8,8};
        int duplicate_number = singleNonDuplicate(arr);
        System.out.println(duplicate_number);
    }
}