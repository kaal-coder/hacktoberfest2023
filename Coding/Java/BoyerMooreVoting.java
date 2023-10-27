public class BoyerMooreVoting {
    public static int findMajorityElement(int[] nums) {
        int candidate = 0;
        int count = 0;

        for (int num : nums) {
            if (count == 0) {
                candidate = num;
                count = 1;
            } else if (candidate == num) {
                count++;
            } else {
                count--;
            }
        }

        // After the first pass, 'candidate' should contain the majority element
        // Verify if it is indeed the majority element by counting its occurrences
        count = 0;
        for (int num : nums) {
            if (num == candidate) {
                count++;
            }
        }

        if (count > nums.length / 2) {
            return candidate;
        } else {
            return -1; // No majority element found
        }
    }

    public static void main(String[] args) {
        int[] nums = {3, 3, 4, 2, 4, 4, 2, 4, 4};
        int result = findMajorityElement(nums);
        if (result != -1) {
            System.out.println("Majority element: " + result);
        } else {
            System.out.println("No majority element found");
        }
    }
}
