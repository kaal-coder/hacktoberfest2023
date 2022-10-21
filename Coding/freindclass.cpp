            // example of friend class
#include <iostream>
using namespace std;
class a
{   
    int a,b;
    public:
    void input()
    {
        a=10; b=40;
    }
    friend class b;
};
class b
{   
    int c;
    public:
        void add(a r)
        {
            c=r.a+r.b;
            cout<<c;
        }
    
};
int main()
{
    a a;
    a.input(); 
    b obj;
    obj.add(a);  
    
    return 0;
}