#include <bits/stdc++.h>

using namespace std;

int lowerBound(vector<int> arr, int n, int x)
{

    int low = 0;
    int high = n - 1;
    int ans = n;

    while (low <= high)
    {

        int mid = low + (high - low) / 2;

        if (arr[mid] >= x)
        {
            high = mid - 1; // left
            ans = mid;
        }
        else
        {
            low = mid + 1; // right
        }
    }

    return ans;
}

int rowWithMax1s(vector<vector<int>> &matrix, int n, int m)
{
    int max_cnt = 0;
    int index = -1;

    for (int i = 0; i < n; i++)
    {
        int cnt_ones = m - lowerBound(matrix[i], m, 1);

        if (cnt_ones > max_cnt)
        {
            max_cnt = cnt_ones;
            index = i;
        }
    }

    return index;
}