import java.util.*;
// A CLI BASED TIC-TAC-TOE GAME USING JAV 
public class TicTacToe{
    public static void main(String[] Args){
        char board[][] = new char[3][3];
        for( int row =0 ;row < board.length ; row++){
            for( int col = 0; col < board[row].length ; col++){
                board[row][col] = ' ';
            }
        }

        char player = 'X';
        boolean gameEnd = false;

        Scanner in = new Scanner(System.in);

        while(!gameEnd){
            displayBoard(board);
            System.out.println(player + " enter your move :" );
            int row = in.nextInt();
            int col = in.nextInt();

            if(board[row][col] == ' '){
                board[row][col] = player;
                gameEnd = haveWon(board, player);
                if(gameEnd){
                    System.out.println(player  + " HAS WON THE GAME!!!");
                }
                else {
                    player = (player == 'X') ? 'O' : 'X';
                }
            } 
            else {
                System.out.println("Invalid move, Space already filled :");
            }
        }
        in.close();
        displayBoard(board); 
    }

    public static void displayBoard(char board[][]){
        for( int row =0 ;row < board.length ; row++){
            for( int col = 0; col < board[row].length ; col++){
                System.out.print(board[row][col] + " | ");
            }
            System.out.println();
        }
    }

    public static boolean haveWon(char board[][], char player) {
        //check in rows
        for( int row =0 ;row < board.length ; row++){
            if(board[row][0] ==player && board[row][1] == player && board[row][2] == player){
                return true;
            }
        }

        //check in columns
        for( int col =0 ;col < board[0].length ; col++){
            if(board[0][col] ==player && board[1][col] == player && board[2][col] == player){
                return true;
            }
        }

        //check in diagonal
        if(board[0][0] ==player && board[1][1] == player && board[2][2] == player){
                return true;
        }
        if(board[0][2] ==player && board[1][1] == player && board[2][0] == player){
            return true;
        }
    return false;   
    }
}