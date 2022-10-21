#include <stdio.h>
#include <math.h>
#include <conio.h>

int main()
{
    int a, b;
    int sum, sub, mult, mod;
    float div;
    printf("enter the value of a ");
    scanf("%d", &a);
    printf("enter the value of b");
    scanf("%d", &b);
    sum = a + b;
    printf("\n add=%d", sum);
    sub = a - b;
    printf("\n sub=%d", sub);
    mult = a * b;
    printf("\n mul=%d", mult);
    div = (a)/(b);
    printf("\n div=%f", div);   
    mod = a % b;
    printf("\n mod=%d", mod);

    return 0;
}