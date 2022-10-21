            // data abstaction by private keyword
#include <iostream>
using namespace std;
class mybank
{   
    private: // this method is used to keep data private this is data abstraction
    int atmpin,balance;
    public:
    string bname,IFSC;
    int accnumber;

    void input()
    {
        atmpin=2442;
        balance=503422;
        bname="paytm";
        IFSC="pytm02356";
        accnumber=3483922;
    }

    void output()
    {
        cout<<"my bank details..."<<endl;
        cout<<atmpin<<endl;
        cout<<balance<<endl;
        cout<<bname<<endl;
        cout<<IFSC<<endl;
        cout<<accnumber<<endl;
    }
};      

int main()
{
    mybank m;
    m.input();
    m.output();

    cout<<"raj trying to get access of your account"<<endl;
    // cout<<m.atmpin<<endl;   // cannot access this information 
    // cout<<m.balance<<endl;  // cannot access this information
    cout<<m.bname<<endl;
    cout<<m.IFSC<<endl;
    cout<<m.accnumber<<endl;
}