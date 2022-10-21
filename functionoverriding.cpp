#include <iostream>
using namespace std;
class a
{
    public:
    void person()
    {
        cout<<"good morning..."<<endl;
    }
};
class b : public a
{
    public:
void person()
    {
        cout<<"good night..."<<endl;
    }
};
int main()
{
    a *p;
    b obj;
    p=&obj; 
    p->person();
    // b obj;
    // obj.person();
    // obj.a::person();
    return 0;
}