import java.util.Scanner;

public class ATM {
    private double balance;
    private int accountNumber;
    private int pin;

    public ATM(int accountNumber, int pin, double balance) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount);
    }

    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient funds");
        }
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        ATM atm = new ATM(123456, 1234, 1000.0);
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the ATM");
        System.out.print("Enter your account number: ");
        int accountNumber = scanner.nextInt();
        System.out.print("Enter your PIN: ");
        int pin = scanner.nextInt();

        if (accountNumber == atm.accountNumber && pin == atm.pin) {
            while (true) {
                System.out.println("1. Check Balance");
                System.out.println("2. Deposit");
                System.out.println("3. Withdraw");
                System.out.println("4. Exit");
                System.out.print("Select an option: ");
                int choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        System.out.println("Balance: $" + atm.getBalance());
                        break;
                    case 2:
                        System.out.print("Enter the deposit amount: $");
                        double depositAmount = scanner.nextDouble();
                        atm.deposit(depositAmount);
                        break;
                    case 3:
                        System.out.print("Enter the withdrawal amount: $");
                        double withdrawalAmount = scanner.nextDouble();
                        atm.withdraw(withdrawalAmount);
                        break;
                    case 4:
                        System.out.println("Thank you for using the ATM");
                        System.exit(0);
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            }
        } else {
            System.out.println("Invalid account number or PIN. Exiting.");
        }
    }
}
