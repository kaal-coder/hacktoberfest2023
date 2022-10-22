#include <bits/stdc++.h>
using namespace std;
 
#define MAX_INT 2147483647
#define MIN_INT -2147483648
 
#define FOR(i, j, k, in) for (int i = j; i < k; i += in)
#define FOREACH(it, l) for (auto it = l.begin(); it != l.end(); it++)
 
#define ll long long
#define vi vector<int>
#define vvi vector<vector<int>>
#define vl vector<ll>
#define vvl vector<vector<ll>>
#define pi pair<int, int>
#define pl pair<ll, ll>
 
#define PB push_back
#define MP make_pair
#define F first
#define S second
#define forn(i, n) for (ll i = 0; i < n; i++)
#define fora(i, a, n) for (ll i = a; i < n; i++)
#define readint(e) \
    int e;         \
    cin >> e
#define readll(e) \
    ll e;         \
    cin >> e
#define readstr(e) \
    string e;      \
    cin >> e
#define mod 1000000007
#define input(n) cin >> n
#define print(n) cout << n
#define print_array(n) \
    forn(i, n) { cout << arr[i] << " "; }
#define input_array(arr, n) \
    forn(i, n) { cin >> arr[i]; }
#define println(n) cout << n << '\n';
#define init(x, a) memset(x, a, sizeof(x))
 
void solve()
{
    readint(n);
    char ch;
    cin >> ch;
    string s;
    cin >> s;
    if(ch == 'g'){
        println(0);
        return;
    }
    vi arr;
    if(s[0] == 'g'){
        arr.PB(0);
    }
    for(int i = 1; i < n; i++){
        if(s[i] == 'g' && s[i - 1] != 'g'){
            arr.push_back(i);
        }
    }
    int count = 0, ans = 0;
    for (int i = 0; i < n; i++){
        if (s[i] == ch){
            bool check = false;
            for (int j = 0; j < arr.size(); j++){
                if (arr[j] > i){
                    count = arr[j] - i;
                    check = true;
                    break;
                }
            }
            if (check == false){
                count = n - i + arr[0];
            }
            ans = max(count, ans);
            count = 0;
        }
    }
    println(ans);
}
 
int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
 
    int tc;
    cin >> tc;
 
    for (int t = 1; t <= tc; t++)
    {
        solve();
    }
}
