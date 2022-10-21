#include <iostream>
using namespace std;
int b=20; //global variable
int main()
{
    int a=10; //local variable  
    static int c=40;
    cout << a <<" "<< b <<" "<< c << endl;
}
