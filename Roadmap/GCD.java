public class Main {
  static int gcd(int a, int b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  public static void main(String args[]) {
    int a = 4, b = 8;
    int ans = gcd(a, b);
    System.out.print("The GCD of the two numbers is "+ans);
  }
}

