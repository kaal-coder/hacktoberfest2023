#include<bits/stdc++.h>

using namespace std;

int main(){
   vector<int> arr;
  
   vector<int> sum;

   arr = {1,2,3,4};
   int n = arr.size()-2;
   cout<<n<<endl;
   int j= 0;
   cout<<"j"<<j<<endl;
   vector<int> d;


   while(j<=n){
    for(int i=j; i<2+j; i++){
      d.push_back(arr[i]);
    }
    for(auto& i : d){
        cout<<i<<" ";

    }
    cout<<endl;
    int a = accumulate(d.begin(),d.end(),0);
    cout<<"sum "<<a<<endl;
    sum.push_back(a);
    d.clear();
    j++;
   }

   int max = *max_element(sum.begin(),sum.end());

   cout<<"max "<<max<<endl;

   
//    while(j>0){
//     for(int i=arr.size()-1; i>=0; i--){
//        d.push_back(arr[i]);
//        cout<<d[i]<<" ";
//     }
//     cout<<endl;
//       int a1 = min_element(arr.begin(), arr.end())- arr.begin();
//             int ele1 = *min_element(arr.begin(), arr.end());

//       cout<<"a1 "<<a1<<endl;
//        vector<int>:: iterator it;
//        it = arr.begin()+a1;
//        cout<<"it "<<*it<<endl;
//         d.erase(it);
//         int a2 = min_element(arr.begin(), arr.end())- arr.begin();
//         int ele2 = *min_element(arr.begin(), arr.end());
//         cout<<"a2 "<<a2<<endl;
//        vector<int>:: iterator ti;
//        ti = arr.begin()+a2;
//         cout<<"ti "<<*ti<<endl;
//      sum.push_back(ele1+ele2);
//      d.clear();
//      j--;
//    }


//    cout<<max<<endl;

}



