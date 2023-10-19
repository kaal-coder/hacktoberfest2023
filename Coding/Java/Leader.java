//Leader in an Array:
//If a member in the array is larger than every member on 
//its right side, it is considered an Leader Element of the 
//array.
//An array's rightmost element is always the Leader.

import java.util.*;
class Leader{
public static ArrayList<Integer> 
printLeadersBruteForce(int[] arr, int n){ 
 ArrayList<Integer> ans= new ArrayList<>();
 int max = arr[n - 1];
 ans.add(arr[n-1]);
 for (int i = n - 2; i >= 0; i--)
 if (arr[i] > max) {
 ans.add(arr[i]);
 max = arr[i];
 }
 return ans; 
}
public static void main(String args[]) 
{
 int n = 6;
 int arr[]= {1, 2, 12, 13, 0, 6};
 ArrayList<Integer> ans= 
printLeadersBruteForce(arr,n);
 Collections.sort(ans,Collections.reverseOrder()); 
 for (int i = 0; i < ans.size(); i++) 
{
 System.out.print(ans.get(i)+" ");
 }
}
}