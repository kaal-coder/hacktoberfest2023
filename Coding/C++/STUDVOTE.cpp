#include<bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        int n=0;
        int k=0;
        cin>>n>>k;
        int arr[101];
        int x=0;
        int count=0;
        int carr[101];
        for(int i=1;i<=n;i++){
            cin>>arr[i];
        }
        for(int i=1;i<=n;i++){
            x=0;
            if(arr[i]!=i){
                for(int j=1;j<=n;j++){
                    if(arr[j]==arr[i]){
                        x++;
                    }
                }
                carr[i]=x;
            }
        }
        for(int i=1;i<=n;i++){
            if(carr[i]>=k){
                count++;
            }
        }
        cout<<count<<endl;
    }
}