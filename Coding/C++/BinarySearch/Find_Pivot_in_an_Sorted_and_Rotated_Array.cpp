// pivot  :  break point of sorted array or rotated array {simply means to find the minimum of the array}
// array : { 1,3,8,10,17}
//  rotated array arr = {8,10,17,1,3}
//  pivot is 3 at index 4

#include<iostream>
using namespace std;

int Pivot_ele(int arr[], int a){
    int s=0;
    int e = a-1;

    while(s<e){
        int mid = s+ (e-s)/2;

        //if array is not rotated thn 
        if(arr[e]>arr[0]){
            return arr[0];
        }
        if(arr[mid]>=arr[0]){
            s= mid+1;
        }
        else{
            e=mid;
        }
    }
    return arr[s];
}


int main(){
    int arr[4] ={11,13,15,17};

    cout<<Pivot_ele(arr,4);
}