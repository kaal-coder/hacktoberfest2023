#include<bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        string s;
        cin>>s;
        int len=0;
        len=s.size();
        int c=0;
        int arr[100000];
        int var=0;
        int count=0;
        for(int i=0;i<len;i++){
            if(s[i]=='1'){
                arr[var]=i;
                var++;
                count++;
            }
        }
        for(int i=0;i<var-1;i++){
            if((arr[i+1]-arr[i])==1){
                c=1;
            }
            else{
                c=0;
                break;
            }
        }
        if(c==1){
            cout<<"YES"<<"\n";
        }
        else if(count==1){
            cout<<"YES"<<endl;
        }
        else{
            cout<<"NO"<<"\n";
        }
    }
}