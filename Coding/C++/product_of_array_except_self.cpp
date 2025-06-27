 
 #include<bits/stdc++.h>
 using namespace std;

 int mod = 1000000007;

int pow(int arr[], int n){

    if(n<0){
        return 1;
    }

    return (arr[n]*pow(arr,n-1))%mod;
}


int *getProductArrayExceptSelf(int *arr, int n)
{
    int *pro = new int[n];
    int p= pow(arr,n-1);
    cout<<"power = "<<p<<endl;

    for(int i=0; i<n; i++){
       pro[i]= (p/arr[i])%mod;
       cout<<"pro"<<pro[i]<<endl;
    }

    return pro;
}

 int main(){

int arr[] = {0,1,2};
int n=3;


    cout<<*getProductArrayExceptSelf(arr,n)<<" ";


    return 0;
 }
 
 
 
 
 
 
 
 
 
 
 
 