// CPP program to generate power set in
// lexicographic order.
#include <bits/stdc++.h>
using namespace std;

// str : Stores input string
// n : Length of str.
void func(string s, vector<string>& str, int n, int pow_set)
{
	int i, j;
	for (i = 0; i < pow_set; i++) {
		string x;
		for (j = 0; j < n; j++) {
			if (i & 1 << j) {
				x = x + s[j];
			}
		}
		if (i != 0)
			str.push_back(x);
	}
}
int main()
{
	int n;
	string s;
	vector<string> str;
	s = "cab";
	n = s.length();
	int pow_set = pow(2, n);
	func(s, str, n, pow_set);
	sort(str.begin(), str.end());
	for (int i = 0; i < str.size(); i++)
		cout << str[i] << " ";
	cout << endl;

	return 0;
}
