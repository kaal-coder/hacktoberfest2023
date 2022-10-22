//Buy Maximum Stocks if i stocks can be bought on i-th day

//Question- In a stock market, there is a product with its infinite stocks. The stock prices are given for N days, where arr[i] denotes the price of the stock on the ith day. There is a rule that a customer can buy at most i stock on the ith day. If the customer has an amount of k amount of money initially, find out the maximum number of stocks a customer can buy. For example, for 3 days the price of a stock is given as 7, 10, 4. You can buy 1 stock worth 7 rs on day 1, 2 stocks worth 10 rs each on day 2 and 3 stock worth 4 rs each on day 3.

#include <bits/stdc++.h>
using namespace std;
//https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/ 

// Returning the maximum stocks
int buyMaxStocks(int n, int k, int prices[])
{
    vector<pair<int, int> > vec;
 
    // Now, Making pair of product cost and number of the day..
    for (int i = 0; i < n; ++i)
        vec.push_back(make_pair(prices[i], i + 1));   
 
    // Sort the vector pair.
    sort(vec.begin(), vec.end());   
 
    // Calculating the maximum number of stock count.
    int result = 0;
    for (int i = 0; i < n; ++i) {
        result += min(vec[i].second, k / vec[i].first);
        k -= vec[i].first * min(vec[i].second, (k / vec[i].first));
    }
 
    return result;
}
 
int main()
{
    int prices[];
    int days;
    cout<<"Enter the number of days: ";
    cin>>days;
    for(int i=0; i<days; i++)
    {
        cin>>prices[i];
    }
    int money;
    cout<<"Enter the initial amount of money the customer has: ";
    cin>>money;
 
    cout << buyMaxStocks(days, money, prices) << endl;
    return 0;
}

//Time Complexity :O(nlogn)