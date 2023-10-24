public class Reverse_No   
{  
public static void main(String[] args)   
{  
int no = 2929, reverse = 0;  
for( ;no != 0; no=no/10)   
{  
int rem = no % 10;  
reverse = reverse * 10 + rem;  
}  
System.out.println("The reverse of the given number is: " + reverse);  
}  
}  
