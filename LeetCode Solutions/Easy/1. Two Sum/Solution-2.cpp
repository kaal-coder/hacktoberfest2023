class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        const int size = nums.size();
        vector<int> ret = {0, 0};
        for (unsigned short i = 0; i < size; i++)
        {
            for (unsigned short x = 0; x < size; x++)
            {
                if (i == x) continue;
                int& a = nums.at(i);
                int& b = nums.at(x);
                if (a + b == target)
                {
                    ret[0] = i; ret[1] = x;
                    return ret;
                }
            }
        }
        return ret;
    }
};
