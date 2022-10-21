#include<bits/stdc++.h>  
using namespace std;  
int main ()  
{    int n;
 cin>>n;
    int myarray[n];  
     for(int i=0;i<n;i++){
       cin>>myarray[i];}
     }    
    for(int k=1; k<10; k++)   
    {  
        int temp = myarray[k];  
        int j= k-1;  
        while(j>=0 && temp <= myarray[j])  
        {  
            myarray[j+1] = myarray[j];   
            j = j-1;  
        }  
        myarray[j+1] = temp;  
    }  
    cout<<"\nSorted list is \n";
    for(int i=0;i<10;i++)  
    {  
        cout <<myarray[i]<<"\t";  
    }  
}

// This code is contributed by Prasant kumar.
