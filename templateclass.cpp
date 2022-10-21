        // example of template class
#include <iostream>
using namespace std;
template <class a> //it will allow to print only single value
class  print
{
    public:
    print(a x,a y)
    {
    cout<<x<<" "<<y<<endl;
    }
    
};
int main()
{
    // print <int> obj(100,400);
    print <char> obj('y','n');
    

return 0;
}
 