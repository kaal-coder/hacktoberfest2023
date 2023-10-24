#include<stdio.h>

int Add(int x, int y){
    int carry; 

    while (y != 0){
        carry = x & y; //AND
        x = x ^ y; //X-OR
        y = carry << 1; //Left Shift
    }

    return x;
}

int main(){
 printf("%d", Add(1, 2));

 return 0;
}