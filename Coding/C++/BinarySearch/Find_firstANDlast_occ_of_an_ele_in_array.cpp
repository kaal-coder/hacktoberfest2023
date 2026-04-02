//Time compleity : O(log n)

#include<iostream>
using namespace std;

int FirstOcc(int arr[], int n, int key){
    int start=0 , end = n-1;
    int ans=-1;
    while(start<= end){
      int mid = start + (end-start)/2;

        if(arr[mid]==key){
            ans = mid;  //mid index ko store krva liya taki agr koi uske age vhi element ho toh update ho jye 
            end= mid-1;
        }

        else if(arr[mid]<key){   //right part
            start = mid+1;
        }
        else{
            end = mid-1;    //left part
        }
    }
    return ans;
}

int LastOcc(int arr[], int n, int key){
    int start=0 , end = n-1;
    int ans=-1;
    while(start<= end){
      int mid = start + (end-start)/2;

        if(arr[mid]==key){
            ans = mid;
            start = mid+1;
        }

        else if(arr[mid]<key){   //right part
            start = mid+1;
        }
        else{
            end = mid-1;    //left part
        }
    }
    return ans;
}




int main(){
    int arr[10] = {1,2,3,3,3,3,3,3,3,6};
    
    cout<<FirstOcc(arr,10,3)<<" "<<LastOcc(arr,10,3)<<endl;
//   if we want to print how many times a elements repeat or can say as total number of occ in array 

   int total = LastOcc(arr,10,3) - FirstOcc(arr,10,3) + 1 ;
   cout<<total<<endl;
}