//Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum
//For example - arr[] = {-2, -3, 4, -1, -2, 1, 5, -3}
// 4+(-1)+(-2)+1+5 = 7, Maximum subarray sum is 7


package arrays;

public class KadaneAlgo {

	public static void main(String[] args) {
		// sample input
		int array[] = {18, -6, -6, -5, 7, 10, 16, -6, -2, 0};
		
		//printing the output
		System.out.println("Maximum subarray sum is " + maxSubarraySum(array));

	}
	//function to find the maximum subarray sum
	static int maxSubarraySum(int array[]) {
		int n = array.length;
		int max = Integer.MIN_VALUE, sum =0;
		for(int i = 0; i<n; i++) {
			sum += array[i];
			//assigning the sum to the max variable if it is greater
			if(max < sum) {
				max = sum;
			}
			//the subarray with negative sum is discarded, only carry subarray till its positive sum.
			if(sum < 0) {
				sum =0;
			}
		}
		return max;
	}

}
