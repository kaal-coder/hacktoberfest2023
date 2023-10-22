// https://codeforces.com/problemset/problem/1807/D

#include <bits/stdc++.h>
 
using namespace std;
 
int main(){
    int t;
    cin>>t;
    while(t--){
        int n,q;
        cin>>n>>q;
        long long int a[n];
        long long int sum=0;
        for(int i=0;i<n;i++){
            cin>>a[i];
            
        }
        long long int pf[n+1];
        pf[0]=0;
        for(int i=1;i<=n;i++){
            pf[i]=a[i-1]+pf[i-1];
        }
        
        for(int i=0;i<q;i++){
            long long int l,r,k;
            cin>>l>>r>>k;
            long long int e=pf[n]-(pf[r]-pf[l-1])+k*(r-l+1);
            
            
            if(e%2!=0){
                cout<<"YES"<<endl;
            }else{
                cout<<"NO"<<endl;
            }
        }
        
    }
    
   
 
    return 0;
}