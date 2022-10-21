        // example of template function
#include <iostream>
using namespace std;
template <class a> //it will allow all types of values
void  print(a x,a y)
{
    cout<<x<<" "<<y<<endl;

}
int main()
{
    print(100,400);
    print('a','b');
    print(45.64,35.86);
    print("yash","naksh");

return 0;
}
 