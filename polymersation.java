import java.util.Scanner;   
class brid
{ 
    public void sound()
    {
        System.out.print("What do sound you create");

    }
}
class crow extends brid
{
    Scanner on = new Scanner(System.in);
 public void sound()
    {
        System.out.print("What do sound you create :");
        String bridname=on.nextLine();
        System.out.print("This is Brid Sound :"+bridname);
    }
}
public class polymersation {
    public static void main(String[] args) {
         crow bri=new crow();
         bri.sound();

    }
}
