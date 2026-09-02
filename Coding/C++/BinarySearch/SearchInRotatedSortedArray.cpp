#include <bits/stdc++.h>
using namespace std;

// One solution

int Pivot_ele(vector<int> &arr, int n)
{

    int s = 0;
    int e = n - 1;

    while (s < e)
    {
        int mid = s + (e - s) / 2;

        if (arr[e] > arr[0])
        {
            return 0;
        }

        if (arr[mid] >= arr[0])
        {
            s = mid + 1;
        }
        else
        {
            e = mid;
        }
    }
    return s;
}

int binarySearch(vector<int> &arr, int s, int e, int k)
{

    while (s <= e)
    {
        int mid = s + (e - s) / 2;

        if (arr[mid] == k)
        {
            return mid;
        }
        if (arr[mid] < k)
        {
            s = mid + 1;
        }
        else
        {
            e = mid - 1;
        }
    }
    return -1;
}

int findPosition(vector<int> &arr, int n, int k)
{
    int pivot = Pivot_ele(arr, n);

    if (k >= arr[pivot] && k <= arr[n - 1])
    {
        return binarySearch(arr, pivot, n - 1, k);
    }
    else
    {
        return binarySearch(arr, 0, pivot - 1, k);
    }
}

// another soution
int search(vector<int> &arr, int n, int k)
{
    int low = 0;
    int high = n - 1;

    while (low <= high)
    {

        int mid = low + (high - low) / 2;

        if (arr[mid] == k)
        {
            return mid;
        }

        // else identify the sorted part
        // left part checking
        if (arr[low] <= arr[mid])
        {
            // check element lie int this range
            if (arr[low] <= k && k <= arr[mid])
            {
                high = mid - 1;
            }
            else
            {
                low = mid + 1;
            }
        }

        // check for right part
        else
        {

            if (arr[mid] <= k && k <= arr[high])
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
    }

    return -1;
}

int main()
{
    int arr[7] = {2, 4, 5, 6, 8, 9, 1};
    int k = 20;

    return 0;
}