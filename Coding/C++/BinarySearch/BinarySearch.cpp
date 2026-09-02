//SEARCHING IN ARRAY "BINARY SEARCH"

//Time complexity : O(log n)

#include <iostream>
using namespace std;        

//let we have a sorted array 
int binarysearch(int arr[], int n, int key){
    int start=0;
    int end=n;

    while (start<=end){            //when end point is greater or equal thn start point     
        // int mid = (start+end)/2;   //to find mid point and update it with new value of start and end 
         int mid = start+ (end-start)/2;                           //above mid method is not good for long integer value so we take other method 

        if(arr[mid]==key){           
            return mid;
        }
        else if(arr[mid]<key){
            start = mid+1;          //update the strt point and move to right part
        }
        else{
            end= mid-1;        //update the end point and move to left part
        }
    }
    return -1;          //if not in the array return -1
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

    int key ;   
    cin>>key;   //taking key or number which we have to search in our array

    cout<<binarysearch(arr,n,key)<<endl;   //passing arrgument to the function 

    return 0;
}