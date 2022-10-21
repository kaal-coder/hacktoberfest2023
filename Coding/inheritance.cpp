#include <iostream>
using namespace std;
class dad
{   
    protected: 
    int amount;
    public: 
        void input()
        {
            amount=10000;
        }
};
class son : public dad
{
    int money;
    public:
        void show()
        {
            money=4567;
            cout<<"Son money "<<money<<endl;
            cout<<"Dad money "<<amount<<endl;
            
        }
};
int main()
{ 
    son s;
    s.input();
    s.show();

    return 0;
}