import turtle as t
import random
t.speed(30)
t.Screen().bgcolor('white')

colours = ['sky blue','cyan']

t.up()
t.goto(20,90)
t.down()
for i in range(200):
    t.color(random.choice(colours))
    t.circle(i)
    t.right(1)

t.done()