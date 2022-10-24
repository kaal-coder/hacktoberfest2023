import java.awt.*;
class mycreation extends Frame
{
	mycreation()
	{
		MenuBar mb=new MenuBar();
		setMenuBar(mb);
		
		Menu m1=new Menu("FILE");
		Menu m2=new Menu("EDIT");
		Menu m3=new Menu("SEARCH");
		Menu m4=new Menu("VIEW");
		Menu m5=new Menu("ENCODING");
		Menu m6=new Menu("LANGUAGE");
		Menu m7=new Menu("SETTINGS");
		Menu m8=new Menu("TOOLS");
		
		Menu mi2=new Menu("OPEN");
		Menu f2=new Menu("FILE2");
	
		mb.add(m1);
		mb.add(m2);
		mb.add(m3);
		mb.add(m4);
		mb.add(m5);
		mb.add(m6);
		mb.add(m7);
		mb.add(m8);
		
		MenuItem mi1=new MenuItem("NEW");
		MenuItem mi3=new MenuItem("SAVE");
		m1.add(mi1);
		m1.add(mi2);
		m1.add(mi3);
		
		MenuItem f1=new MenuItem("FILE1");
		
		mi2.add(f1);
		mi2.add(f2);
		
		MenuItem ed=new MenuItem("EDIT");
		
		f2.add(ed);
		
		setLayout(null);
		setSize(400,500);
		setTitle("Menu_Example");
		setVisible(true);
	}
	public static void main(String[] args)
	{
		mycreation m=new mycreation();
	}
}