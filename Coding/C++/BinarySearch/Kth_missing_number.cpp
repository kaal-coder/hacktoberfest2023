 #include<bits/stdc++.h>
using namespace std;
 
 int findKthPositive(vector<int>& arr, int k) {
    //Brute Forrce solution
    //TC- O[n]
    //SC- O[1] 

        // for(int i=0; i<arr.size(); i++){
        //     if(arr[i] <= k){
        //         k++;
        //     }
        //     else{
        //         break;
        //     }
        // }

        // return k;

    // optimal solution using binary search
    //TC- O[log N]
    //SC- O[1] 

    int n =arr.size();
    int low =0; 
    int high = n-1;

    while(low<=high){
        int mid= (low+high)/2;

        int missing = arr[mid] - (mid+1);

        if(missing<k){
            low=mid+1;
        }
        else{
            high = mid-1;
        }
    }
    // return low+k; or
    return high+1+k;

    }