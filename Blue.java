import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class BlueDotApp {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Blue Dot App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new FlowLayout());

        JLabel label = new JLabel("Enter a number:");
        JTextField textField = new JTextField(10);
        JPanel dotPanel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                g.setColor(Color.BLUE);
                g.fillOval(50, 50, 50, 50);
            }
        };

        textField.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String input = textField.getText();
                try {
                    Double.parseDouble(input);
                    dotPanel.setBackground(Color.BLUE);
                } catch (NumberFormatException ex) {
                    dotPanel.setBackground(Color.YELLOW);
                }
            }
        });

        frame.add(label);
        frame.add(textField);
        frame.add(dotPanel);
        frame.setSize(200, 200);
        frame.setVisible(true);
    }
}
In this example, a JFrame contains a JLabel prompting the user to enter a number, a JTextField for input, and a custom JPanel named dotPanel that overrides its paintComponent method to draw a blue dot. When the user enters text and presses Enter, the program checks if the input is a valid number using Double.parseDouble(). If it's a number, the dot remains blue. If not, the dot changes to yellow.

Please make sure to run this code in a Java development environment with Swing support, as Swing is part of the Java standard library.





