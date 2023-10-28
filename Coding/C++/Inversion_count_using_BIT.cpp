#include<bits/stdc++.h>
using namespace std;

const int N = 2e5+7;
int n;
int a[N]={0}; 
int BIT[N]={0}; 

// range sum query 

void update(int i){
     while(i<=n){
        BIT[i]+=1;
        i+=(i&(-i));
     }
     return;
}

int query(int i){
    int re =0;
    while(i>0){
        re+=BIT[i];
        i-=(i&(-i));
    }
    return re;
}

int main(){
    
    
    // cordinate-compression

    cin>>n;
    memset(BIT,0,sizeof BIT);
    set<int> s;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        s.insert(a[i]);
    }

    map<int,int> m;
    int count =1;
    for(auto i: s){
        m[i]=count;
        count++;
    }

    vector<int> b(n+1);
    for(int i=1;i<=n;i++){
        b[i]=m[a[i]];
    }
    
    int res =0;
    for(int i=n;i>0;i--){
        res+=query(b[i]-1);
        update(b[i]);
    }

    cout<<res<<"\n"; 
    
    return 0;
}
