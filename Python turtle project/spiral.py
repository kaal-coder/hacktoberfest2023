import turtle
colours = ['yellow', 'red', 'green', 'blue', 'orange', 'purple']
t= turtle.Pen()
t.speed(30)
turtle.bgcolor("white")
for x in range(200):
	t.pencolor(colours[x%6]) 
	t.width(x/100 + 1) 
	t.forward(x)
	t.left(59) 
turtle.done()
