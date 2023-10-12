#include <bits/stdc++.h>
using namespace std;
void update(int arr[], int p, int i, int el)
{
    if (i > p - 1)
    {
        cout << "Error\n";
        return;
    }
    arr[i] = el;
}

void display(int arr[], int p)
{
    for (int i = 0; i < p; i++)
    {
        cout << arr[i] << '\t';
    }
}
void query(int p)
{
    cout << "Size\t" << p << endl;
}
void insert(int arr[], int p, int i, int el)
{
    if (i > p)
    {
        cout << "Error\n";
        return;
    }
    for (int j = p; j > i; j--)
        arr[j] = arr[j - 1];
    arr[i] = el;
}

void dele(int arr[], int p, int i)
{
    if (i > p - 1)
    {
        cout << "Error\n";
        return;
    }
    for (int j = i; j < p - 1; j++)
        arr[j] = arr[j + 1];
}
int main()
{
    int n, m, p, el, i;
    cout << "Enter the size of array" << endl;
    cin >> n;
    p = n;
    int arr[10];
    cout << "Enter the elements of array" << endl;
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    while (1)
    {
        cout << "\nEnter your choice \t 1 for updation \t 2 for display \t 3 for insertion \t 4 for deletion \t 5 for query \t 9 for exit\n";
        cin >> m;
        if (m == 1)
        {
            cout << "\nEnter the position you want to update and also enter value\n";
            cin >> i >> el;
            update(arr, p, i - 1, el);
        }
        else if (m == 2)
        {
            display(arr, p);
        }
        else if (m == 3)
        {
            cout << "\nEnter the position you want to insert and also enter value\n";
            cin >> i >> el;
            insert(arr, p, i - 1, el);
            p++;
        }
        else if (m == 4)
        {
            cout << "\nEnter the position you want to delete\n";
            cin >> i;
            dele(arr, p, i - 1);
            p--;
        }
        else if (m == 5)
        {
            query(p);
        }
        else if (m == 9)
            break;

        else
            cout << "Wrong Choice" << endl;
    }
}
