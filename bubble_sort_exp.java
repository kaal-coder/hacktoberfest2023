//Java implementation of Bubble Sort
//Time complexity O(n^2)
import java.util.*;
class bubble_sort_exp{
    public static void main(String args[]){
        Scanner in=new Scanner(System.in);
        int a[]=new int[10];
        int i,j,temp;
        System.out.println("Enter 10 numbers in SDA");
        for(i=0;i<10;i++)
        {
            a[i]=in.nextInt();
        }
        for(i=0;i<9;i++)
        {
            for(j=0;j<10-i-1;j++)
            {
                if(a[j]>a[j+1]){
                    temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
        }
        System.out.println("Sorted array:");
        for(i=9;i>=0;i--)
        {
            System.out.println(+a[i]+" ");
        }
    }
}