#include <bits/stdc++.h>
using namespace std;

int FirstOcc(vector<int> &arr, int n, int key)
{
    int start = 0, end = n - 1;
    int ans = -1;
    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] == key)
        {
            ans = mid;
            end = mid - 1;
        }

        else if (arr[mid] < key)
        { // right part
            start = mid + 1;
        }
        else
        {
            end = mid - 1; // left part
        }
    }
    return ans;
}

int LastOcc(vector<int> &arr, int n, int key)
{
    int start = 0, end = n - 1;
    int ans = -1;
    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] == key)
        {
            ans = mid;
            start = mid + 1;
        }

        else if (arr[mid] < key)
        { // right part
            start = mid + 1;
        }
        else
        {
            end = mid - 1; // left part
        }
    }
    return ans;
}

int count(vector<int> &arr, int n, int x)
{
    int a = FirstOcc(arr, n, x);
    int b = LastOcc(arr, n, x);

    if (a == -1)
        return 0;

    return b - a + 1;
}

int main()
{

    return 0;
}
