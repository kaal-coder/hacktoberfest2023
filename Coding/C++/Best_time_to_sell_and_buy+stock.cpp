#include <bits/stdc++.h>
using namespace std;

int bestTimeToBuyAndSellStock(vector<int>&price) {
    int n = price.size();
    int minPrice = INT_MAX;
    int mini = price[0];
    int maxPro = 0;

    for(int i=0; i<n; i++){
        int cost = price[i] - mini;
        maxPro = max(maxPro,cost);
        mini = min(mini,price[i]);
    }
    return maxPro;
}