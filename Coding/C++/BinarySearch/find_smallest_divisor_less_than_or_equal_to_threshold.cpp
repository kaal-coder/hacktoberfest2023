
#include<bits/stdc++.h>
using namespace std;


//TC- O[N * log(maxi)]
// SC - O[1]

int sum(vector<int> &arr, int k){
	int summ =0;
	for(int i=0; i<arr.size(); i++){
		summ = summ +  ceil( (double)(arr[i]) / (double)(k));
	}

	return summ;
}


int smallestDivisor(vector<int>& arr, int limit)
{
	int mini = INT_MAX;
	int maxi = INT_MIN;

	for(int i=0; i<arr.size(); i++){
		mini = min(mini,arr[i]);
		maxi = max(maxi,arr[i]);
	}

	int low = 1;
	int high = maxi;
	int ans = 0;

	while(low<=high){
		int mid = (low+high)  / 2;

		if(sum(arr,mid) <= limit){
			ans = mid;
			high = mid - 1;
		}
		else{
			low= mid+1;
		}
	}

	return ans;
}