#include<bits/stdc++.h>
using namespace std;

vector<int> moveZeros(int n, vector<int> nums) {
 
// brute force
// TC - O{2N}
// SC - O[N]
  /*vector<int>temp;
  int k=0;
        for(int i=0; i<nums.size(); i++){
            if(nums[i] != 0){
                k++;
                temp.push_back(nums[i]);
            }
            else{
                continue;
            }
        }

        for(int i =0; i<temp.size(); i++){
            nums[i] = temp[i];
        }

        int s =temp.size();

        for(int i=s; i<nums.size(); i++){
            nums[i] = 0;
        }
        return nums;

    */

// Optimal solution 
// TC - O [N]
// SC- O[1]
   
   int j = -1;
   for(int i=0; i<n; i++){
       if(nums[i] == 0){
           j=i;
           break;
       }
   }

   if(j==-1){
       return nums;
   }

   for(int i = j+1; i<n; i++){
       if(nums[i] != 0){
           swap(nums[i] , nums[j]);
           j++;
       }
   }

   return nums;
        
    }



int main() {


    return 0;
}