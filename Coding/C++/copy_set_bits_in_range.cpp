//Copy set bits in a range
//Given two numbers x and y, and a range [l, r] where 1 <= l, r <= 32. The task is consider set bits of y in range [l, r] and set these bits in x also.

#include <iostream>
using namespace std;
//https://www.geeksforgeeks.org/copy-set-bits-in-a-range/
 
// Copying set bits in range [left, right] from b to a. Kindly note that a is passed by reference and modified by this function.
void CopyingSetBits(unsigned &a, unsigned b,
                 unsigned left, unsigned right)
{
    if (left < 1 || right > 32)
        return ;
 
    // here we get the length of the mask
    int maskLength = (1ll<<(right-left+1)) - 1;
 
    // Shifting the mask to the required position
    // "&" with b to get the set bits at between left and right in b
    int m = ((maskLength)<<(left-1)) & b ;
    a = a | m;
}
 
int main()
{
   unsigned a, b, left, right;
   cout<<"Enter the value of x and y respectively: ";
   cin>>a>>b;
   cout<<"Enter the value of left and right respectively: ";
   cin>>left>>right;
   CopyingSetBits(a, b, left, right);
   cout << "Modified x is " << a;
   return 0;
}

//Time Complexity: O(r)
//Auxiliary Space: O(1)