#INITIALIZING BY IMPORTING REQUIRED MODULES

import random
from tkinter import *
from tkinter import ttk
from tkinter import messagebox
import csv
import time

print('ROULETTE')

'''
--------------------------------------------------------------------------------------------------------------------------------
'''

first=False

#INTRODUCTION PAGE

def intro():
    global first
    shoot=Tk()
    shoot.title('Welcome to Roulette! Hope you enjoy!')
    shoot.geometry('1900x900')

    canvas = Canvas(shoot, width = 600, height = 400)      
    pic=PhotoImage(file='roulette.png')
    canvas.create_image(175,50, anchor=NW, image=pic)      
    canvas.pack(side=RIGHT)

    tl1='ROULETTE'
    text=Label(shoot, text=tl1)
    text.config(font=('Times New Roman',16))
    text.pack()

    w=Label(shoot,text=' ')
    w.config(font=('Ariel',25))
    w.pack()

    tl2='Instructions'
    text=Label(shoot, text=tl2)
    text.config(font=('Times New Roman',14))
    text.pack()

    w=Label(shoot,text=' ')
    w.config(font=('Ariel',5))
    w.pack()

    tl3='This will be a game of the original roulette\nYou are starting with $100 and your aim should be to be as rich as possible, the game ends if you loose all your money.'
    text=Label(shoot, text=tl3)
    text.config(font=('Times New Roman',12))
    text.pack()

    w=Label(shoot,text=' ')
    w.config(font=('Ariel',5))
    w.pack()

    tl4='1.There are 37 slots 0 -- 36.'
    text=Label(shoot, text=tl4)
    text.config(font=('Times New Roman',12))
    text.pack()

    w=Label(shoot,text=' ')
    w.config(font=('Ariel',5))
    w.pack()

    tl5='2. You can bet in the following ways'
    text=Label(shoot, text=tl5)
    text.config(font=('Times New Roman',12))
    text.pack()

    tl5a='a. Odd or even numbers. (odd - 1,3,5,.....,35)(even - 2,4,6,...36 ,NOT ZERO)'
    tl5b='b. Red or black numbers. These exclude 0 for 0 is green.'
    tl5c='c. Low (1-18) or high (19-36)numbers. As you can see ,they also exclude 0.'
    tl5d='d. Any specific number.'
    text=Label(shoot, text=tl5a)
    text.config(font=('Times New Roman',12))
    text.pack()
    text=Label(shoot, text=tl5b)
    text.config(font=('Times New Roman',12))
    text.pack()
    text=Label(shoot, text=tl5c)
    text.config(font=('Times New Roman',12))
    text.pack()
    text=Label(shoot, text=tl5d)
    text.config(font=('Times New Roman',12))
    text.pack()

    w=Label(shoot,text=' ')
    w.config(font=('Ariel',5))
    w.pack()

    w=Label(shoot,text=' ')
    w.pack()

    tl61='3. In each case, ou can bet as much money you want.'
    tl62='If you lose, you lose the money you bet, but if you win, you get double the money back for cases a,b,c.'
    tl63='For case d, you get triple amount back for all numbers, and if you bet on 0 and win, 5 times the money is returned'
    text=Label(shoot, text=tl61)
    text.config(font=('Times New Roman',12))
    text.pack()
    text=Label(shoot, text=tl62)
    text.config(font=('Times New Roman',12))
    text.pack()
    text=Label(shoot, text=tl63)
    text.config(font=('Times New Roman',12))
    text.pack()

    w=Label(shoot,text=' ')
    w.pack()

    dash=Label(shoot,text='__________________________________________________')
    dash.pack()

    w=Label(shoot,text=' ')
    w.pack()
    w=Label(shoot,text=' ')
    w.pack()
    
    if first==False:
        name=Label(shoot,text='Enter your name!')
        name.pack()
        user=Entry(shoot)
        user.pack()
        first=True
        def Exit():
            global username
            username=user.get()
            shoot.destroy()
        exit_button = Button(shoot, text="I UNDERSTAND ALL RULES\nLETS CONTINUE!", command=Exit) 
        exit_button.pack(pady=30, side=BOTTOM)

    w=Label(shoot,text=' ')
    w.pack()
    
    if first==True:
        exit_button = Button(shoot, text="I UNDERSTAND ALL RULES\nLETS CONTINUE!", command=shoot.destroy)
        exit_button.pack(pady=30, side=BOTTOM)

    shoot.mainloop()

#A person can bet more money than they actually have... But if they loose, game ends with them in a debt.
#But if they win, they get to keep all the money

'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''


#DEFINING CONSTANTS

print()
print()

number_of_games=0
wins=0
losses=0
money=100
oewins=0
rbwins=0
hlwins=0
sinwins=0

all_numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
             23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]

odd=[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]

even=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]

black=[15,4,2,17,6,13,11,8,10,24,33,20,31,22,29,28,35,26]

red=[32,199,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3]

low=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

high=[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]

print('----------------')
print()

'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''

def inichoice():

    #INITIALIZING GAME WINDOW 1
    
    global entry
    win= Tk()
    win.geometry("300x200")
    entry= Entry(win, width= 40)
    entry.focus_set()
    entry.pack()
    def display_text():
        global words
        global entry
        global play
        inp=entry.get()
        if inp=='1':
            messagebox.showinfo(title='Roulette', message=(':) Lets continue'))
            play=1
        else:
            messagebox.showinfo(title='Rouulette', message=('END'))
            play=0
        win.destroy()
    blank=Label(win,text='')
    blank.pack()

    label1=Label(win, text="Enter 1 to start playing, enter anything else to end!")
    label1.pack()
    ttk.Button(win, text= "Enter choice",width= 20, command=display_text).pack(pady=20)


    win.mainloop()



'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''

#SELECTION MENU

def selection():
    global choice
    def ch():
        global choice
        choice=choice.get()
        if choice==1:
            t='Odd Eve'
        elif choice==2:
            t='Red Black'
        elif choice==3:
            t='High Low'
        elif choice==4:
            t='Single'
        else:
            t='Instructions opening'
        messagebox.showinfo(title='Selection Done', message='Selection done '+t)
        again.destroy()
    again=Tk()
    again.geometry('300x300')
    text=Label(again,text='Select gamemode')
    choice=IntVar()
    R_o_e=Radiobutton(again, text="Odd Eve", variable=choice, value=1, command=ch)
    R_o_e.pack()
    R_r_b=Radiobutton(again, text="Red Black", variable=choice, value=2, command=ch)
    R_r_b.pack()
    R_HiLo=Radiobutton(again, text="High Low", variable=choice, value=3, command=ch)
    R_HiLo.pack()
    R_sin=Radiobutton(again, text="Single", variable=choice, value=4, command=ch)
    R_sin.pack()
    R_rouxls=Radiobutton(again, text="Rouxls Kaard", variable=choice, value=5, command=ch)
    R_rouxls.pack()
    again.mainloop()
'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''


#GAME MODES

#1

def OddEve():
    OEwin=Tk()
    OEwin.geometry('400x600')

    text1='Enterr 1 to bet on odd, 2 or higher number for eve'
    text2='How much money to bet'   
    blank=Label(OEwin,text='')
    blank.pack()

    prompt_bet=Label(OEwin, text=text1)
    prompt_bet.pack()

    bet_enter=Entry(OEwin)
    bet_enter.pack()

    prompt_moni=Label(OEwin, text=text2)
    prompt_moni.pack()

    bet_money_input=Entry(OEwin)
    bet_money_input.pack()

    def bet_confirm():
        global ch_oe_bet
        global bet_money
        ch_oe_bet=int(bet_enter.get())
        bet_money=int(bet_money_input.get())
        if ch_oe_bet==1:
            line='You hve bet '+str(bet_money)+' on Odd'
        else:
            line='You hve bet '+str(bet_money)+' on Eve'
        initial_game_text.config(text=line)

    enter_bet=Button(OEwin, text='Enter bet', command=bet_confirm)
    enter_bet.pack()

    initial_game_text=Label(OEwin)
    initial_game_text.pack()

    def confirm_bet():
        global wins
        global money
        global number_of_games
        global oewins
        money=money-bet_money
        result=random.randint(0,36)
        if result in odd:
            if ch_oe_bet==1:
                win=True
            else:
                win=False
        elif result in even:
            if ch_oe_bet==1:
                win=False
            else:
                win=True
        else:
            win=False
            zero=True
        ball_text='ball has landed on '+str(result)
        if win==True:
            wins+=1
            oewins+=1
            money=money+(bet_money)*2
            res_text='You have won! Now you have '+str(money)+' dollars'
        else:
            global losses
            losses+=1
            res_text='You have lost! Now you have '+str(money)+' dollars'
        messagebox.showinfo(title='Result', message=(ball_text,res_text))
        number_of_games+=1
        OEwin.destroy()
        global s
        if ch_oe_bet==1:
            s.writerow([str(number_of_games),'Odd Eve','odd',result,bet_money])
        else:
            s.writerow([str(number_of_games),'Odd Eve','eve',result,bet_money])            
    confirm=Button(OEwin, text='Confirm Bet', command=confirm_bet)
    confirm.pack()
    pic=PhotoImage(file='roulette.png')
    Label(OEwin,image=pic).pack()
    OEwin.mainloop()
    
'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''
    
#2

def RedBlack():
    RBwin=Tk()
    RBwin.geometry('400x600')

    text1='Enterr 1 to bet on Black, 2 or higher number for red'
    text2='How much money to bet'   

    prompt_bet=Label(RBwin, text=text1)
    prompt_bet.pack()

    bet_enter=Entry(RBwin)
    bet_enter.pack()

    prompt_moni=Label(RBwin, text=text2)
    prompt_moni.pack()

    bet_money_input=Entry(RBwin)
    bet_money_input.pack()

    def bet_confirm():
        global ch_oe_bet
        global bet_money
        ch_oe_bet=int(bet_enter.get())
        bet_money=int(bet_money_input.get())
        if ch_oe_bet==1:
            line='You hve bet '+str(bet_money)+' on Black'
        else:
            line='You hve bet '+str(bet_money)+' on Red'
        initial_game_text.config(text=line)

    enter_bet=Button(RBwin, text='Enter bet', command=bet_confirm)
    enter_bet.pack()

    initial_game_text=Label(RBwin)
    initial_game_text.pack()

    def confirm_bet():
        global wins
        global money
        global number_of_games
        global rbwins
        money=money-bet_money
        result=random.randint(0,36)
        if result in black:
            if ch_oe_bet==1:
                win=True
            else:
                win=False
        elif result in red:
            if ch_oe_bet==1:
                win=False
            else:
                win=True
        else:
            win=False
            zero=True
        ball_text='ball has landed on '+str(result)
        if win==True:
            wins+=1
            rbwins+=1
            money=money+(bet_money)*2
            res_text='You have won! Now you have '+str(money)+' dollars'
        else:
            global losses
            losses+=1
            res_text='You have lost! Now you have '+str(money)+' dollars'
        messagebox.showinfo(title='Result', message=(ball_text,res_text))
        global s
        if ch_oe_bet==1:
            s.writerow([str(number_of_games),'Red Black','black',result,bet_money])
        else:
            s.writerow([str(number_of_games),'Red Black','red',result,bet_money])                    
        number_of_games+=1
        RBwin.destroy()
    confirm=Button(RBwin, text='Confirm Bet', command=confirm_bet)
    confirm.pack()
    pic=PhotoImage(file='roulette.png')
    Label(RBwin,image=pic).pack()
    RBwin.mainloop()

'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''

#3

def HiLo():
    HLwin=Tk()
    HLwin.geometry('400x600')

    text1='Enterr 1 to bet on Low numbers, 2 or higher number for high numbers'
    text2='How much money to bet'   

    prompt_bet=Label(HLwin, text=text1)
    prompt_bet.pack()

    bet_enter=Entry(HLwin)
    bet_enter.pack()

    prompt_moni=Label(HLwin, text=text2)
    prompt_moni.pack()

    bet_money_input=Entry(HLwin)
    bet_money_input.pack()

    def bet_confirm():
        global ch_oe_bet
        global bet_money
        ch_oe_bet=int(bet_enter.get())
        bet_money=int(bet_money_input.get())
        if ch_oe_bet==1:
            line='You hve bet '+str(bet_money)+' on Low'
        else:
            line='You hve bet '+str(bet_money)+' on High'
        initial_game_text.config(text=line)

    enter_bet=Button(HLwin, text='Enter bet', command=bet_confirm)
    enter_bet.pack()

    initial_game_text=Label(HLwin)
    initial_game_text.pack()

    def confirm_bet():
        global wins
        global money
        global number_of_games
        global hlwins
        money=money-bet_money
        result=random.randint(0,36)
        if result in low:
            if ch_oe_bet==1:
                win=True
            else:
                win=False
        elif result in high:
            if ch_oe_bet==1:
                win=False
            else:
                win=True
        else:
            win=False
            zero=True
        ball_text='ball has landed on '+str(result)
        if win==True:
            wins+=1
            hlwins+=1
            money=money+(bet_money)*2
            res_text='You have won! Now you have '+str(money)+' dollars'
        else:
            global losses
            losses+=1
            res_text='You have lost! Now you have '+str(money)+' dollars'
        messagebox.showinfo(title='Result', message=(ball_text,res_text))
        global s
        if ch_oe_bet==1:
            s.writerow([str(number_of_games),'High Low','Low',result,bet_money])
        else:
            s.writerow([str(number_of_games),'High Low','High',result,bet_money])                    
        number_of_games+=1
        HLwin.destroy()

    confirm=Button(HLwin, text='Confirm Bet', command=confirm_bet)
    confirm.pack()
    pic=PhotoImage(file='roulette.png')
    Label(HLwin,image=pic).pack()
    HLwin.mainloop()

'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''

#4

def single():
    big=Tk()
    big.geometry('400x600')
    t41='Ready to take the risk now, are we'
    blank=Label(big,text='')
    blank.pack()
    not_blank1=Label(big,text=t41)
    not_blank1.pack()
    blank=Label(big,text='')
    blank.pack()
    blank=Label(big,text='')
    blank.pack()

    text1='Enter the number on which you believe your luck will land on'
    text2='How much money to bet'
    
    prompt_bet=Label(big, text=text1)
    prompt_bet.pack()

    bet_enter=Entry(big)
    bet_enter.pack()

    prompt_moni=Label(big, text=text2)
    prompt_moni.pack()

    bet_money_input=Entry(big)
    bet_money_input.pack()

    def bet_confirm():
        global bet_number_choice
        global bet_money
        bet_number_choice=int(bet_enter.get())
        bet_money=int(bet_money_input.get())
        line='You have bet $'+str(bet_money)+' on the number '+str(bet_number_choice)
        initial_game_text.config(text=line)

    enter_bet=Button(big, text='Enter bet', command=bet_confirm)
    enter_bet.pack()

    initial_game_text=Label(big)
    initial_game_text.pack()

    def bigbet():
        global wins
        global money
        global losses
        global number_of_games
        global sinwins
        money=money-bet_money
        result=random.randint(0,36)
        if bet_number_choice==0 and result==0:
            money=money+(bet_money)*5
            news='WOW YOU ACTUALLY WON WITH 0!!!\nYour balance now is '+str(money)
            wins+=1
            sinwins+=1
        elif bet_number_choice==result:
            money=money+(bet_money)*5
            news='WOW YOU ACTUALLY WON WITH A 1/37 chance!!!\nYour balance now is '+str(money)
            wins+=1
            sinwins+=1
        else:
            news='Dont worry, my friend. there was a really low chance...'
            losses+=1
        prenews='The ball landed on '+str(result)+'\n'
        messagebox.showinfo(title='Result', message=(prenews,news))
        s.writerow([str(number_of_games),'single',bet_number_choice,result,bet_money])
        number_of_games+=1
        big.destroy()

    confirm=Button(big, text='Confirm Bet', command=bigbet)
    confirm.pack()
    pic=PhotoImage(file='roulette.png')
    Label(big,image=pic).pack()
    big.mainloop()

'''
-----------------------------------------------------------------------------------------------------------------------------------------------------
'''

#ENDSCREEN

def endcard():
    root=Tk()
    root.title('Roulette End Card. Thanks for playing!!')
    root.geometry('900x900')
    l1=Label(root,text='ROULETTE')
    l1.config(font=('Ariel',25))
    l2=Label(root,text='__________________________________________________________')    
    l1.pack(side=TOP)
    l2.pack(side=TOP)

    w=Label(root,text=' ')
    w.pack()

    stats=Label(root,text='STATS')
    stats.config(font=('Ariel', 15))
    stats.pack()
    w=Label(root,text=' ')
    w.pack()

    nog='You hve played '+str(number_of_games)+'time(s)'
    lig='You faced defeat '+str(losses)+' time(s)'
    wig='You savoured victory '+str(wins)+' time(s)'
    kharcha='You started with $100 and leving with $'+str(money)

    s1=Label(root,text=nog)
    s2=Label(root,text=lig)
    s3=Label(root,text=wig)
    s4=Label(root,text=kharcha)
    s1.pack()
    s2.pack()
    s3.pack()
    s4.pack()

    dash=Label(root,text='__________________________________________________')
    dash.pack()

    canvas = Canvas(root, width = 600, height = 275)      
    pic=PhotoImage(file='roulette.png')
    canvas.create_image(175,0, anchor=NW, image=pic)      
    canvas.pack()

    w=Label(root,text=' ')
    w.pack()

    def all_stats():
        lb=Tk()
        lb.title('All Scores')
        lb.geometry('1000x600')
        f=open('Leaderboards.csv','r')
        r=csv.reader(f)
        x=0
        Label(lb,text=' ').pack()
        for i in r:
            if x==0:
                Label(lb,text=i).pack()
                Label(lb,text=' ').pack()
                Label(lb,text=' ').pack()
                x=1
            else:
                y=''
                for j in i:
                    y=y+str(j)+'\t'
                Label(lb,text=y).pack()
                Label(lb,text=' ').pack()
        f.close()
        Exit=Button(lb,text='exit',command=lb.destroy)
        Exit.pack()
        lb.mainloop()
        
    def own_stats():
        lb=Tk()
        lb.title('Your Game')
        lb.geometry('1000x600')
        global filename
        f=open(filename,'r')
        r=csv.reader(f)
        x=0
        Label(lb,text=' ').pack()
        for i in r:
            if x==0:
                Label(lb,text=i).pack()
                Label(lb,text=' ').pack()
                Label(lb,text=' ').pack()
                x=1
            else:
                y=''
                for j in i:
                    y=y+str(j)+'\t'
                Label(lb,text=y).pack()
                Label(lb,text=' ').pack()
        f.close()
        Exit=Button(lb,text='exit',command=lb.destroy)
        Exit.pack()
        lb.mainloop()

    exit_button = Button(root, text="        EXIT        ", command=root.destroy) 
    exit_button.pack(pady=30)

    dash=Label(root,text='__________________________________________________')
    dash.pack()

    Button(root,text='Look at all scores',command=all_stats).pack()
    Button(root,text='Look at how you fared',command=own_stats).pack()


    root.mainloop()

'''
--------------------------------------------------------------------------------------------------------------------------------
'''

#When player has less than 0 money

def broke():
    messagebox.showerror(title='YOU ARE BROKE', message='You are in debt. Aborting game')

'''
--------------------------------------------------------------------------------------------------------------------------------
'''

#To create a personal file for the player to be stored in database

def csv1():
    global s
    global g
    global filename
    filename=username+'.csv'
    g=open(filename,'w',newline='')
    s=csv.writer(g)
    s.writerow(['Bet number','Bet choice','Bet on','Ball on','money at stake'])

'''
--------------------------------------------------------------------------------------------------------------------------------
'''

#Actual running code

intro()
csv1()
inichoice()
while True:
    if money<0:
        broke()
        break
    if play==1:
        selection()
        if choice==1:
            OddEve()
            inichoice()
        elif choice==2:
            RedBlack()
            inichoice()
        elif choice==3:
            HiLo()
            inichoice()
        elif choice==4:
            single()
            inichoice()
        elif choice==5:
            intro()
            inichoice()
    elif play==0:
        break

                                
'''
--------------------------------------------------------------------------------------------------------------------------------
'''

#CSV DBM

f=open('Leaderboards.csv','r',newline='')
r=csv.reader(f)
l=[]
for i in r:
    l.append(i)
serial=str(int(l[-1][0])+1)
f.close()

f=open('Leaderboards.csv','a',newline='')
s2=csv.writer(f)
dt=str(list(time.localtime())[2])+'/'+str(list(time.localtime())[1])+'/'+str(list(time.localtime())[0])+'  '+str(list(time.localtime())[3])+':'+str(list(time.localtime())[4])
s2.writerow([serial,username,str(money),str(number_of_games),str(wins),str(losses),str(oewins),str(rbwins),str(hlwins),str(sinwins),dt])
f.close()
g.close()

#THE END
endcard()

'''
--------------------------------------------------------------------------------------------------------------------------------
'''
