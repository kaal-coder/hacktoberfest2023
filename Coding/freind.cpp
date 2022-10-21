            // example of freind function
#include <iostream>
using namespace std;
class ankit
{   
    private:
    string tv;

    public:
        void show()
        {
            tv="IPL Final 2021";
        }
    friend void ankush(ankit r);
};
void ankush(ankit r)
{
    cout<<"I'm ankush now i am, Watching "<<r.tv;
}
int main()
{
    ankit a;
    a.show();
    ankush(a);
    return 0;
}