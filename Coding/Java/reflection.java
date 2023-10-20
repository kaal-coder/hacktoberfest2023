package reflectionAPI;

import java.io.Serializable;

public final class Person implements Serializable, Cloneable {
  private String name;
  private Integer age;
  private String address;

  private Person() {
    super();
    System.out.println("Runnning Private Constructor");
  }

  public Person(String name, Integer age, String address) {
    super();
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getAge() {
    return age;
  }

  public void setAge(Integer age){
    this.age = age;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  private void validation() {
  }

  public void validate(int age) {
  }
}

package reflectionAPI;

import java.lang.reflect.Modifier;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class ReflectionDemo {

  public static void main(String[] args) throws Exception {

    // load the file person.java in the class3 using classLoader using the below three methods -

    //METHOD (1) - getClass() method

    Person s = new Person("Gaurang", 19, "indore");
    Class class1 = s.getClass();
    System.out.println(class1);

    //METHOD (2) - .class method

    Class class2 = Person.class;
    System.out.println(class2);

    //METHOD (3) - Class.forName() method

    Class class3 = Class.forName("reflectionAPI.Person");
    System.out.println(class3);

    //FOR CONSTRUCTORS -

    Constructor[] constructors = class3.getConstructors();
    Constructor[] constructors2 = class3.getDeclaredConstructors();

    System.out.println("\nget Constructors Method\n");

    for (Constructor constructor: constructors) {
      System.out.println(constructor);
    }

    System.out.println("\nDeclared Constructor Method\n");

    for (Constructor constructor: constructors2) {
      System.out.println(constructor);
    }

    //FOR METHODS -

    Method[] methods = class3.getMethods();

    System.out.println("\nGet method Method\n");

    for (Method method: methods) {
      System.out.println(" method : " + method + "\nhashcode : " + method.hashCode() + " ");
    }

    System.out.println("\nDeclared method Method\n");

    Method[] methods2 = class3.getDeclaredMethods();

    for (Method method: methods2) {
      System.out.println(method);
    }

    System.out.println();
    constructors2[0].setAccessible(true);
    Object person = constructors2[0].newInstance();
    System.out.println(person);

    //FOR MODIFIERS -
    int a = class3.getModifiers();
    System.out.println(a + " " + Modifier.toString(a));
  }
}
