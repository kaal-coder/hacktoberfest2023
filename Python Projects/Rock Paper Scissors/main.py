import random
import os

def game(point,lives):
    os.system('clear')
    with open("hiscore.txt") as f:
        hiScoreStr = f.read()
        print("************** Rock Paper Scissors Game *************\n" )
        print(f" Highest win streak : {hiScoreStr}  ")
        print("\n Rules :\n  *Choose paper scissors or Rock to play against a CPU. \n  *You have 3 lives.\n  *If you loose 3 times game over. \n  *If you win continously the streak will rise. ")
    p1=input("\n Rock(R) , Paper(P) or Scissors(S) ? \n ")
    choices=["R","P","S"]
    if(p1=="R"):
        p1c="Rock"
    elif(p1=="S"):
        p1c="Scissors"
    elif(p1=="P"):
        p1c="Paper"
    else:
        p1c="*Invalid*"
    print(f"Player choose :{p1c}")
    if(p1=="R"or p1=="S" or p1=="P"):
        rno=random.randint(0,2)
        p2=choices[rno]
        if(p2=="R"):
            p2c="Rock"
        elif(p2=="S"):
            p2c="Scissors"
        elif(p2=="P"):
            p2c="Paper"

        print(f"CPU choose    :{p2c}")
        if p1==p2:
            print("Its a draw !")
            print(f"Streak : {point}")
        else:
            if(p1=="R"and p2=="S"):
                print("You win !")
                point=point+1
                print(f"Streak : {point}")
            elif(p1=="R"and p2=="P"):
                lives=lives-1
                print(f"You loose . {lives} life(s) left . ")
                print(f"Streak : {point}")
            elif(p1=="S"and p2=="P"):
                print("You win !")
                point=point+1
                print(f"Streak : {point}")
            elif(p1=="S"and p2=="R"):
                lives=lives-1
                print(f"You loose . {lives} life(s) left . ")
                print(f"Streak : {point}")
            elif(p1=="P"and p2=="R"):
                print("You win !")
                point=point+1
                print(f"Streak : {point}")
            elif(p1=="S"and p2=="R"):
                lives=lives-1
                print(f"You loose . {lives} life(s) left . ")
                print(f"Streak : {point}")
            if(lives<1):
                print("Game Over !")
                if int(hiScoreStr)<point :
                    print("new high streak ! ")
                    with open("hiscore.txt", "w") as f:
                        f.write(str(point))
        y=input("\n\t\tPlay again (y/n) ?\n\t\t")
        if(y=="y"or y=="Y"):
            game(point,lives)
        else:
            if int(hiScoreStr)<point :
                print("new high streak ! ")
                with open("hiscore.txt", "w") as f:
                    f.write(str(point))
            
    else:
        print("Invalid Input")
        game(point,lives)
    if int(hiScoreStr)<point :
                print("new high streak ! ")
                with open("hiscore.txt", "w") as f:
                    f.write(str(point))   
    

with open("hiscore.txt") as f:
    hiScoreStr = f.read()
    print("************** Rock Paper Scissors Game *************\n" )
    print(f" Highest win streak : {hiScoreStr}  ")
    print("\n Rules :\n  *Choose paper scissors or Rock to play against a CPU. \n  *You have 3 lives.\n  *If you loose 3 times game over. \n  *If you win continously the streak will rise. ")

game(0,3)





      