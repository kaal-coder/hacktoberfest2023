#include<bits/stdc++.h>
using namespace std;


int ceil(vector<int> &arr, int n, int x){

	//  int n = arr.size();
	 int low = 0;
    int high = n - 1;
    int ans = -1;

    while (low <= high)
    {

        int mid = low + (high - low) / 2;

        if (arr[mid] >= x)
        {
            high = mid - 1; // left
           ans = arr[mid];
        }
        else
        {
            low = mid + 1; // right
        }
    }

	return ans;

}

int floor(vector<int> &arr, int n, int x){
	//  int n = arr.size();
	 int low = 0;
    int high = n - 1;
    int ans = -1;

    while (low <= high)
    {

        int mid = low + (high - low) / 2;

        if (arr[mid] <= x)
        {
             ans = arr[mid];
			 low = mid + 1; // right
        }
        else
        {
            high = mid - 1; // left
        }
    }

	return ans;

}

pair<int, int> getFloorAndCeil(vector<int> &arr, int n, int x) {
	pair<int, int> p;

	
	p.first = floor(arr, n, x);
	p.second = ceil(arr, n,  x);

	return p;
}



int main() {
    return 0;
}