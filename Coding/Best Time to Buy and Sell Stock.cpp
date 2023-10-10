#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
        int maxProfit = 0;
        int mini = prices[0];
        
        for(int i = 1; i < prices.size(); i++) {
            int curProfit = prices[i] - mini;
            maxProfit = std::max(maxProfit, curProfit);
            mini = std::min(mini, prices[i]);
        }
        
        return maxProfit;
    }
};

int main() {
    // Example usage of the Solution class
    std::vector<int> prices = {7, 1, 5, 3, 6, 4};
    Solution solution;
    int maxProfit = solution.maxProfit(prices);

    std::cout << "Maximum profit: " << maxProfit << std::endl;

    return 0;
}
