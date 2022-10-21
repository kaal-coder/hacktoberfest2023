#include <iostream>
using namespace std;
int main()
{
    int a,b,ch,c=0;
    cout<<"enter two numbers";
        cin>>a>>b;
    cout<<"enter your choice";
    cin>>ch;
switch(ch)
        {
            case 1: 
            c=a+b;
            cout<<"addition ="<<c;
            break;
            case 2: 
            c=a-b;
            cout<<"subtraction ="<<c;
            break;
            case 3: 
            c=a*b;
            cout<<"multiplication ="<<c;
            break;
            case 4: 
            c=a/b;
            cout<<"division ="<<c;
            break;
            case 5: 
            c=a%b;
            cout<<"remainder ="<<c;
            break;
            default:
            cout<<"invalid choice";
        }
}