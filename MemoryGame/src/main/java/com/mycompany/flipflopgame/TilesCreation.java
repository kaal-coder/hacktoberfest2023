package main.java.com.mycompany.flipflopgame;
import java.util.*;

/**
 * @author Imaan
 */
public class TilesCreation {
    //GLOBALS 
    
    //these variables will have location of each icon
    int chick1, chick2;
    int ghost1, gost2;
    int panda1, panda2;
    int teddy1, teddy2;
    int giraffe1, giraffe2;
    int frog1, frog2;
    int owl1, owl2;
    int lion1, lion2;
    
    
    //generate random numbers & assign them to each shape twice.  its their location on the game board.
    public void initializePostion(){
        int n = 0;

        //first add all the numbers from 0 to 15 into an array list, then shuffle it
        List<Integer> randomCollection = new ArrayList<>();
        for (int i = 0; i <= 15; i++){
            randomCollection.add(i); 
        }
        Collections.shuffle(randomCollection);

        //assign each shape their locations by getting value  against index
        chick1 = randomCollection.get(n);
        n++;
        chick2 = randomCollection.get(n);
        n++;
        ghost1 = randomCollection.get(n);
        n++;       
        gost2 = randomCollection.get(n);
        n++   ;   
        panda1 = randomCollection.get(n);
        n++;
        panda2 = randomCollection.get(n);
        n++; 
        teddy1 = randomCollection.get(n);
        n++;
        teddy2 = randomCollection.get(n);
        n++;
        giraffe1 = randomCollection.get(n);
        n++;
        giraffe2 = randomCollection.get(n);
        n++; 
        frog1 = randomCollection.get(n);
        n++;
        frog2 = randomCollection.get(n);
        n++;
        owl1 = randomCollection.get(n);
        n++;
        owl2 = randomCollection.get(n);
        n++;
        lion1 = randomCollection.get(n);
        n++;
        lion2 = randomCollection.get(n);
        n++; 
    }
    
// type will be from 0 to 7 and tell what type of shape it is
    //forexample if type == 0 that means its chick
    public int getTileType(int position){
        int type = 100;
        
        System.out.print("icons type ");
        if (position == chick1 || position == chick2){
            type = 0;
            System.out.print(type + " - Chick");
        }
        else if (position == ghost1 || position == gost2){
            type = 1;
            System.out.print(type + " - Ghost");
        }
        else if (position == panda1 || position == panda2){
            type = 2;
            System.out.print(type + " - Panda");
        }
        else if (position == teddy1 || position == teddy2){
            type = 3;
            System.out.print(type + " - Donut");
        }
        else if (position == giraffe1 || position == giraffe2){
            type = 4;
            System.out.print(type + " - Mushroom");
        }
        else if (position == frog1 || position == frog2){
            type = 5;
            System.out.print(type + " - Frog");      
        }
        else if (position == owl1 || position == owl2){
            type = 6;
            System.out.print(type + " - Owl");
        }
        else if (position == lion1 || position == lion2){
            type = 7;
            System.out.print(type + " - Lion");
        }
        System.out.println();
        
        return type;
    }
}
    