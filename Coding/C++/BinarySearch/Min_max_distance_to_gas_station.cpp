 
#include <bits/stdc++.h>

using namespace std;

 

int numberOfGasStationsRequired(long double dist, vector<int> &arr) {

    int n = arr.size(); // size of the array

    int cnt = 0;

    for (int i = 1; i < n; i++) {

        int numberInBetween = ((arr[i] - arr[i - 1]) / dist);

        if ((arr[i] - arr[i - 1]) == (dist * numberInBetween)) {

            numberInBetween--;

        }

        cnt += numberInBetween;

    }

    return cnt;

}

 

long double minimiseMaxDistance(vector<int> &arr, int k) {

    int n = arr.size(); // size of the array

    long double low = 0;

    long double high = 0;

 

    //Find the maximum distance:

    for (int i = 0; i < n - 1; i++) {

        high = max(high, (long double)(arr[i + 1] - arr[i]));

    }

 

    //Apply Binary search:

    long double diff = 1e-6 ;

    while (high - low > diff) {

        long double mid = (low + high) / (2.0);

        int cnt = numberOfGasStationsRequired(mid, arr);

        if (cnt > k) {

            low = mid;

        }

        else {

            high = mid;

        }

    }

    return high;

}
