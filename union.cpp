#include <iostream>
using namespace std;
union stu
{
    int roll;
    char name[30];
    float marks;
};

int main()
{
    union  stu s;       // for union we have to change struct keyword into union
    cout<<"enter student roll no: "<<ends;
    cin>>s.roll;
    cout<<"Roll no: "<<s.roll<<endl;
    cout<<"enter student name: "<<ends;
    cin>>s.name;
    cout<<"Name: "<<s.name<<endl;
    cout<<"enter student marks: "<<ends;
    cin>>s.marks;
    cout<<"Marks"<<s.marks<<endl;

    return 0;
}