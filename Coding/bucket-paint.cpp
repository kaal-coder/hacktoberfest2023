#include <bits/stdc++.h>
#define modd 1000000007
using namespace std;
unsigned long power(unsigned long x,
                    unsigned long y, unsigned long p)
{
    unsigned long res = 1;
    x = x % p;
    while (y > 0)
    {

        if (y & 1)
            res = (res % p * x % p) % p;

        y = y >> 1;
        x = (x % p * x % p) % p;
    }
    return res;
}

int ways(int n, int m)
{
    return power(m - 1, n - 1, modd) * m % modd;
}
int main()
{
    int t;
    cin >> t;
    while (t > 0)
    {
        int n, m;
        cin >> n >> m;
        cout << ways(n, m) << endl;
        t--;
    }
    return 0;
}