#include<bits/stdc++.h>
using namespace std;



//Total TC - O[N * log (max-min)]
// SC - O[1]
bool posible(vector<int> &arr, int day, int m, int k){
	int n = arr.size();
	int cnt =0; 
	int noOFb = 0;

	//count no of bouquets
	for(int i=0; i<n; i++){

		
		//blooming is possible
		if(arr[i] <= day){
			cnt++;
		}

    //blooming not possible, check the no of bouquets we can make till now 
	  else{
			noOFb += (cnt/k);
			cnt =0;
		}
	}
  
	//end consecutive we have to add
	noOFb +=(cnt/k);
	return noOFb >= m;
}

int minDays(vector<int>& arr, int m, int k) {

	//to avoid conflict we connvertes int to long long 
  long long val = m * 1ll * k * 1ll;
	int n =arr.size();

  // not possible case
	if(val > n) return -1;

	int mini = INT_MAX, maxi = INT_MIN;

  //finding the range - min to max of arr
	for(int i=0; i<n; i++){
		mini = min(mini,arr[i]);
		maxi  = max(maxi, arr[i]);
	}
  
	//applying binary search
    int low = mini, high = maxi;

    while(low<=high){
        int mid = low + (high-low) / 2;

        if(posible(arr,mid,m,k)){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }

    return low;

    }