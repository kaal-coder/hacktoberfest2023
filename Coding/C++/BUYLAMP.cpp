#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, k, x, y;
        cin >> n >> k >> x >> y;
        int sum = k * x;
        if (n - k > 0)
        {

            if ((n - k) * x > (n - k) * y)
                sum += (n - k) * y;
            else
                sum += (n - k) * x;
        }
        cout << sum << endl;
    }
    return 0;
}