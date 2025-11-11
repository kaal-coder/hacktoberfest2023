#include <bits/stdc++.h>

using namespace std;

bool searchMatrix(vector<vector<int>> &mat, int target)
{
    int n = mat.size();
    int m = mat[0].size();

    int low = 0;
    int high = (n * m) - 1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        int ele = mat[mid / m][mid % m];

        if (ele == target)
            return true;

        if (ele < target)
            low = mid + 1;

        else
            high = mid - 1;
    }

    return false;
}