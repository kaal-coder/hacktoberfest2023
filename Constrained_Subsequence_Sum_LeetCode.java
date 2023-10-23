class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        int[] dp=new int[nums.length];

        int maximumSum=Integer.MIN_VALUE;

        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->(b[0]-a[0]));

        for(int i=0;i<nums.length;i++){
            dp[i]=nums[i];

            if(i==0){
                pq.offer(new int[]{dp[0],0});
                maximumSum=Math.max(maximumSum,dp[i]);
                continue;
            }

            while(!pq.isEmpty() && i-pq.peek()[1]>k){
                pq.poll();
            }

            dp[i]=Math.max(dp[i],nums[i]+pq.peek()[0]);

            pq.offer(new int[]{dp[i],i});

            maximumSum=Math.max(maximumSum,dp[i]);
        }

        return maximumSum;
    }
}
