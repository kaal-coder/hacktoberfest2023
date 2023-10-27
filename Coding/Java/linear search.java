//linear search in java
import java.util.*;
class l_search
{
    public static void main(String args[])
    {
        int c=0,x,n,i;
        Scanner in=new Scanner(System.in);
        System.out.println(" ENTER THE LIMIT OF THE ARRAY:");
         n=in.nextInt();
         int a[]=new int[n];
        for( i=0;i<n;i++)
        {
            a[i]=in.nextInt();
        }
        System.out.println("ENTER THE NUMBER TO BE SEARCHED:");
        x=in.nextInt();
        for(i=0;i<n;i++)
        {
            if(a[i]==x)
            { c=1;
                break;
            }
        }
        if(c==1)
            System.out.println("NUMBER FOUND");
        else
            System.out.println("NUMBER NOT FOUND");
    }
}
