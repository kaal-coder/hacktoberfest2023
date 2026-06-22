#include <bits/stdc++.h>
using namespace std;


struct DSU{
    vector<long long > p, sum;
    DSU(long long  n) : p(n),sum(n,1) {
        iota(p.begin(), p.end(), 0);
    }
    long long  leader(long long  x){
        return p[x] == x?p[x]:p[x]=leader(p[x]);
    }
    bool same(long long  u, long long  v){
        return leader(u) == leader(v);
    }
    void merge(long long  u, long long  v) {
        u = leader(u), v = leader(v);
        if(sum[u]<sum[v]){swap(sum[u],sum[v]);}
        sum[u]+=sum[v];
        p[v]=u;
    }
};



int main(){
   
    int n,m;cin>>n>>m; 
    vector<int> a(n);
    DSU f(n); 
    for(int i=0;i<n;i++){
        cin>>a[i];
        f.sum[i]=a[i];
    }
    for(int i=0;i<m;i++){
        int u,v;cin>>u>>v;
        u--;v--;
        f.merge(u,v);
    }


    return 0;
}
