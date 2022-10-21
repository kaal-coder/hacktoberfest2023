import java.awt.*;
import java.applet.*;
/*
	<applet code = "BouncingBall" width=900 height=800>
	</applet>
*/

public class BouncingBall extends Applet implements Runnable
//implements qki sleep use krna hai taki upr se niche aaye to upr wala invisible
{
	int x,y;
	Thread t;
	public BouncingBall()//compulsory public rkho constructor
	{
	x=400;//fixed
	y=100;//changing
	t=new Thread(this);
	t.start();
	}
	
	public void paint(Graphics g)
	{
        g.setColor(Color.red);
	g.fillOval(x,y,100,100);//100,100 ball size
	}
	
	public void run()
	{
		while(true)
		{
			while(y!=500)//500 tk jana h from 100
			{
				y+=10;
				try
				{
				 Thread.sleep(50);
				 repaint();//to call paint again
				}
				catch(Exception e)
				{	
				}
			}
			while(y!=100)//100 tak jana from 500
			{
				y-=10;
				try
				{
					Thread.sleep(50);
					repaint();
				}
				catch(Exception e)
				{	
				}
}}}}