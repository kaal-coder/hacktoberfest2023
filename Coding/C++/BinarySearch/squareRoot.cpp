#include<iostream>
using namespace std;

long long int sqrt(int n ){

    int s=0;
    int e=n;
     long long int ans=-1;
    while(s<=e){
         long long int mid= s+(e-s)/2;

        long long int sqr = mid*mid;

        if(sqr==n){
            return mid;
        }

        if(sqr>n){
            e=mid-1;
        }
        else{
            ans=mid;
            s=mid+1;
        }
    }
    return ans;
}

double moreprecise(int n, int p, int intpart){
    double a = 1;
    double ans = intpart;

    for(int i=0; i<p; i++){
        a=a/10;
          for(double j=ans; j*j<n; j=j+a){
            ans=j;
          }
    }
    return ans;
}

int main(){

    int n=37;
    int intpart= sqrt(n);
    int precisionValue = 3;
    cout<<"sqrt is "<<moreprecise(n,precisionValue,intpart);

    return 0;
}