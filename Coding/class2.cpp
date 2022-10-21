#include <iostream>
using namespace std;
class person
{
    private:
    int run;
    string msg;
    public:
    void play()
    {
        run=50;
        cout<<"Today i scored "<<run<<" runs"<<endl;
    }
    void walk()
    {
        msg="today i walked 3 kilometers";
        cout<<msg; 
    }

};
int main()
{
    person obj;
    obj.play(); obj.walk();
    return 0;
}