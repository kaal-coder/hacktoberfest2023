import java.util.Scanner;

public class Prime1 {
    static boolean check_prime(int a){
        boolean flag = false;
        for (int i = 2; i < a ; i++) {
            if (a%i == 0){
                flag = true;
                break;
            }
        }
        return flag;
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int lower = input.nextInt();
        int upper = input.nextInt();
        for (int i = lower; i <= upper; i++) {
            if (!check_prime(i)){
                System.out.println(i);}
        }

    }
}
