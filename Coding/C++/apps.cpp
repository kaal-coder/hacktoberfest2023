#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int s,x,y,z;
        cin>>s>>x>>y>>z;
        int space=s-x-y;
        if(space>=z){
            cout<<"0"<<endl;
        }
        else if(space<=z){
            if((space+x)>=z){
                cout<<"1"<<endl;
            }
            else if((space+y)>=z){
                cout<<"1"<<endl;
            }
            else if((space+x+y)>=z){
                cout<<"2"<<endl;
            }
        }
    }

}