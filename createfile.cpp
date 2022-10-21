#include <iostream>
#include<fstream>
using namespace std;

int main()
{
    string str;
    ifstream newFile("C:\\Users\\yashp\\Desktop\\cpp.txt");
    
    while(getline(newFile,str))
    {
        cout<<str<<endl;
    }
   
    newFile.close();

    return 0;
}