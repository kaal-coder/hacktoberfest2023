
#include<bits/stdc++.h>
using namespace std;

//TC- O[N * log(sum-max)]
// SC - O[1]


int daysReq(vector<int> &weights , int cap){
    int day =1; 
    int load= 0;
    int n = weights.size();

    for(int i=0; i<n; i++){
        if(load+weights[i] > cap){
            day++;
            load = weights[i];
        }
        else{
            load += weights[i];
        }
    }

    return day;
}

int leastWeightCapacity(vector<int> &weights, int d)
{
    int maxi = INT_MIN;
    int sum =0;
    int n = weights.size();

    // for(int i=0; i<n; i++){
    //     maxi = max(maxi,weights[i]);
    //     sum += weights[i];
    // }

    maxi = *max_element(weights.begin(), weights.end());
    sum = accumulate(weights.begin(), weights.end() , 0);

    int low = maxi;
    int high =  sum;

    while(low<=high){
        int mid = low + (high-low) /2;
        int minDay = daysReq(weights,mid);
        if(minDay <= d){
            high = mid-1;
        }
        else{
            low= mid+1;
        }
    }

    return low;
}