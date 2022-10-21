#include <iostream>
using namespace std;
int main()
{
    int atm;
    cout<<"enter your pin";
    cin>>atm;
    if(atm==1234)
    {
        cout<<"you have access for your account ";
    }
    else{
        cout<<"invalid pin ";
    }
}