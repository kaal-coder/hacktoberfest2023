#include <bits/stdc++.h> 
#include <algorithm>

vector<vector<int>> pairSum(vector<int> &arr, int s){
   int size = sizeof(arr)/sizeof(arr[0]);
    vector <int> m ;
    sort(arr.begin(),arr.end());
    int diff = 0 ;
    for(int i=0;i<size;i++){
        diff = abs(s - arr[i]) ;
       if(diff>=arr[i]){
           for(int j=i+1;j<size;j++){
               if(diff==arr[j]){
                   m.push_back(arr[i]);
                   m.push_back(arr[j]);
                   return m;
                   
               }
           }
       }
    }
}


int main(){


}