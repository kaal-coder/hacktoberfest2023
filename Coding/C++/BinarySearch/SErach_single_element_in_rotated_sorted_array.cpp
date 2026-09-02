
#include <bits/stdc++.h>
using namespace std;

int singleNonDuplicate(vector<int>& nums) {
        int n = nums.size();
        // int ans;
// brute force code 
// TC -O[N]
// SC- O[1]
   /*     if(n==1) return nums[0];

        for(int i=0; i<n; i++){

            //for 1st element
         if(i==0){
            if(nums[i] != nums[i+1]){
                ans= nums[i];
            }
          }
            //for last element
            else if(i==n-1){
                if(nums[i] != nums[i-1]){
                    ans= nums[i];
                }
            }

            // for the middle element
            else{

                if(nums[i] != nums[i-1] && nums[i] != nums[i+1]){
                    ans=nums[i];
                }

            }
        }
        return ans;
    */


    //using binary search
    //TC- O[log N]
    // SC- O[1]

    int low = 1; 
    int high = n-2;

    if(n==1) return nums[0];

    if(nums[0] != nums[1]) return nums[0];

    if(nums[n-1] != nums[n-2])  return nums[n-1];

    while(low <= high){

        int mid =( low + high) /2;

        if(nums[mid] != nums[mid - 1] && nums[mid] != nums[mid+1]){
            return nums[mid];
        }

        if( (mid%2==1 && nums[mid] == nums[mid-1]) ||  (mid%2==0 && nums[mid] == nums[mid+1]) ){

            low = mid + 1;  // eleminent the left half 
           
        }

        else{

            // eleminent the right half 

            high = mid -1;
        }
    }

    return -1;
    }