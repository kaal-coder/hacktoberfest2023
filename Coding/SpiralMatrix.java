/*
Q . Given an m x n matrix, return all elements of the matrix in spiral order.

Example
	Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
	Output: [1,2,3,4,8,12,11,10,9,5,6,7]
	
Example
	Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
	Output: [1,2,3,6,9,8,7,4,5]

Question added by Adityakr1410
*/


public class SpiralMatrix 
{
    public static boolean isPalindrome(String s) 
    {
        if (s.isEmpty())
        	return true;
        int head = 0, tail = s.length() - 1;
        char cHead, cTail;
        while(head <= tail) 
        {
        	cHead = s.charAt(head);
        	cTail = s.charAt(tail);
        	if (!Character.isLetterOrDigit(cHead))
        		head++;
        	else if(!Character.isLetterOrDigit(cTail))
        		tail--;
        	else 
        	{
        		if (Character.toLowerCase(cHead) != Character.toLowerCase(cTail))
        			return false;
        		head++;
        		tail--;
        	}
        }
        return true;
    }
    public static void main(String []args)
    {
    	String str = "A man, a plan, a canal: Panama"; // take different inputs
    	System.out.println(isPalindrome(str)?"Palindrome":"Not Palindrome");
    }
}
