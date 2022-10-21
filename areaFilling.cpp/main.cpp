#include <graphics.h>
void boundaryFill8(int x, int y, int fill_color,int boundary_color)
  {
    if(getpixel(x, y) != boundary_color &&
    getpixel(x, y) != fill_color)
   {
     putpixel(x, y, fill_color);
     boundaryFill8(x + 1, y, fill_color, boundary_color);
     boundaryFill8(x, y + 1, fill_color, boundary_color);
     boundaryFill8(x - 1, y, fill_color, boundary_color);
     boundaryFill8(x, y - 1, fill_color, boundary_color);
     boundaryFill8(x - 1, y - 1, fill_color, boundary_color);
     boundaryFill8(x - 1, y + 1, fill_color, boundary_color);
     boundaryFill8(x + 1, y - 1, fill_color, boundary_color);
     boundaryFill8(x + 1, y + 1, fill_color, boundary_color);
   }
 }

void floodfill(int x,int y,int old,int newcol)
  {if(getpixel(x,y)==newcol)
    {
    putpixel(x,y,old);
    floodfill(x+1,y,old,newcol);
    floodfill(x-1,y,old,newcol);
    floodfill(x,y+1,old,newcol);
    floodfill(x,y-1,old,newcol);
    floodfill(x-1,y-1,old,newcol);
    floodfill(x-1,y+1,old,newcol);
    floodfill(x+1,y-1,old,newcol);
    floodfill(x+1,y+1,old,newcol);
    }
  }

int main()
{
    int option;
    printf("1.Boundary fill\n");
    printf("2.Flood Fill\n");
    printf("enter your option:");
    scanf("%d",&option);
    int gd=DETECT, gm;
    initgraph(&gd, &gm, "");
    switch(option)
    {
        case 1: printf("1.Boundary fill\n");
                rectangle(100,100,300,250);
                boundaryFill8(101,101,YELLOW, WHITE);break;
        case 2: printf("2.Flood Fill\n");
                rectangle(150,150,250,300);
                floodfill(151, 151, 13, 0);break;
    }
    delay(1000);
    closegraph();
    return 0;
}
