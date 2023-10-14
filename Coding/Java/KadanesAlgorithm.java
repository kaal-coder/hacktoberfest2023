public class KadanesAlgorithm {
    public static void main(String[] args) {
        // Define an array of integers
        int arr[] = {3, -4, 5, 6, -8, 7};

        // Call the `kadane` function to find the maximum subarray sum
        int maxSubarraySum = kadane(arr);

        // Print the result
        System.out.println("Maximum Subarray Sum: " + maxSubarraySum);
    }

    // Kadane's algorithm implementation
    static int kadane(int arr[]) {
        // Initialize two variables to track the maximum subarray sum ending at the current position (prevmax) and the overall maximum subarray sum (res)
        int prevmax = arr[0];
        int res = arr[0];

        // Iterate through the array starting from the second element (index 1)
        for (int i = 1; i < arr.length; i++) {
            // Update `prevmax` as the maximum of the current element and the sum of the current element and the previous maximum subarray sum
            prevmax = Math.max(arr[i] + prevmax, arr[i]);

            // Update `res` as the maximum of `prevmax` and `res`, which represents the overall maximum subarray sum
            res = Math.max(prevmax, res);
        }

        // Return the maximum subarray sum
        return res;
    }
}
