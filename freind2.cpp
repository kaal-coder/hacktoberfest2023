            // example of friend function
#include <iostream>
using namespace std;
class yash;
class ankit
{   
    private:
    int a;

    public:
        void ihave()
        {
            a=10;
        }
    friend void ankush(ankit p,yash p2);
};
class yash
{   
    private:
    int b;

    public:
        void ihave()
        {
            b=30;
        }
    friend void ankush(ankit p,yash p2);
};
void ankush(ankit p,yash p2)
{
    int c;
    c=p.a+p2.b;
    cout<<c;
}
int main()
{
    ankit a;
    a.ihave();
    yash a2;
    a2.ihave();
    ankush(a,a2);
    return 0;
}