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

int main()
{

    int n = 5;
    int x = 8;

    vector<int> arr = {3, 5, 8, 15, 19};

    cout << lowerBound(arr, n, x) << " lower bound of x using custom function" << endl;

    // lower bound as inbuilt function

    cout << lower_bound(arr.begin(), arr.end(), x) - arr.begin() << " lower bound of x using in-built function" << endl;

    // in the case of array we use lower_bound(arr, arr+n);
    // and if we want to find the lower bound in the pericular range than use the lower_bound(arr+2, arr+7); //range 2 to 6

    return 0;
}
