package com.example.BinarySearch;

public class floor {

    public static void main(String[] args) {

        int []arr = {2,3,5,9,14,16,18};
        int target= -111;

        int ans = floornumber(arr,target);
        System.out.println(ans);
    }

// This program will find the floor of the given target number in the array
// floor number basically means the the largest number which is smaller than or equal to the target.


    static int floornumber(int [] arr,int target){


if(target<arr[0]){
    return -1;
}


        int start = 0;
        int end = arr.length - 1;

        int mid = start + (end-start)/2;

        while(start<=end){
            if(arr[mid]==target){
                return mid;
            }else if(target<arr[mid]){
                end= mid-1;
            }else{
                start = mid +1;
            }
            mid = start + (end-start)/2;
        }

        return end;
    }

}
