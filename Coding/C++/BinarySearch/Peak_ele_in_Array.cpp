#include <iostream>
using namespace std;        
//{simply means to find the maximum of the array}
int Peak_ele(int arr[], int n){
    int start=0;
    int end = n-1;

    while(start<end){
        int mid = start + (end- start)/2;

        if(arr[mid] < arr[mid+1]){
            start = mid+1;
        }
        else{
            end =mid;
        }
    }
    return start;

}

int main()
{

    int n;
    cin >> n;     //taking size of array 

    int arr[n];  //declear array of size n

// taking sorted array elements from user
    for(int i=0; i<n; i++){
        cin>>arr[i];
    } 
   
    
    cout<<Peak_ele(arr,n)<<endl;
    return 0;
}