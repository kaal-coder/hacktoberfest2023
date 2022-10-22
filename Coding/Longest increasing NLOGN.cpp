int lengthOfLIS(vector<int>& nums) {
    set<int> s;
    for (int i=0;i<nums.size();i++)
    {
        auto it=s.lower_bound(nums[i]);
        if (it==s.end()) s.insert(nums[i]);
        else 
        {
            s.erase(*it);
            s.insert(nums[i]);
        }
    }
    return s.size();
}
