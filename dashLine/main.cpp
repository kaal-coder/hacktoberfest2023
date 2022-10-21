#include <graphics.h>
#include <stdio.h>
int main( )
{
float x,y,x1,y1,x2,y2,dx,dy,step;
int i,gd=DETECT,gm,m=0;

initgraph(&gd,&gm,(char*)"");

printf("Enter the value of x1 and y1 : ");
scanf("%f%f",&x1,&y1);

printf("Enter the value of x2 and y2: ");
scanf("%f%f",&x2,&y2);

dx=abs(x2-x1);
dy=abs(y2-y1);

if(dx>=dy)
step=dx;
else
step=dy;

dx=dx/step;
dy=dy/step;

putpixel(x1,y1,9);
putpixel(x2,y2,9);

for(i=0;i<=step;i++)

{
if(m<4)
{
x1=x1+dx;
y1=y1+dy;
putpixel(x1,y1,9);
delay(100);
m=m+1;
}
else
{
x1=x1+dx;
y1=y1+dy;
m=0;
}}
closegraph();
}

