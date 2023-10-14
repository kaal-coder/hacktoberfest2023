#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        //string inpt="";
        string arr;
        cin>>arr;
        int c=0;
        int len=sizeof(arr);
        for(int j=0;j<len;j++){
            if(arr[j]=='<'){
                arr[j]='>';
            }
            else if(arr[j]=='>'){
                arr[j]='<';
            }
        }
        for(int j=0;j<(len-1);j++){
            if((arr[j]=='>')&&(arr[j+1]=='>')){
                break; 
            }
            else if((arr[j]=='<')&&(arr[j+1]=='<')){
                break;
            }
            else if((arr[j]=='>')&&(arr[j+1]=='<')){
                c=c+1;
            }
        }
        cout<<c<<endl;
    }
}