#include <bits/stdc++.h>

using namespace std;

bool searchElement(vector<vector<int>> &mat, int target)
{
    int row = mat.size();
    int col = mat[0].size();

    int row_index = 0;
    int col_index = col - 1;

    while (row_index < row && col_index >= 0)
    {

        int ele = mat[row_index][col_index];

        if (ele == target)
            return true;

        if (ele < target)
            row_index++;

        else
            col_index--;
    }

    return false;
}