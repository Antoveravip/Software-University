import java.util.Scanner;

public class SandGlass {

	public static void main(String[] args) {
		// Variables
		int num = 0;
		char dot = '.', asterisk = '*';
		String dots, asterisks;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			num = Integer.parseInt(input.nextLine());
		}
		
		// Calculation and output
		// Upper half
        for (int i = 0; i <= num / 2; i++) {
        	dots = newStringOfChars(dot, i);
        	asterisks = newStringOfChars(asterisk, num - 2 * i);
        	System.out.printf("%1$s%2$s%1$s\r\n", dots, asterisks);
        }

        // Down half
        for (int k = (num / 2 - 1); k >= 0; k--) {
        	dots = newStringOfChars(dot, k);
        	asterisks = newStringOfChars(asterisk, num - 2 * k);
        	System.out.printf("%1$s%2$s%1$s\r\n", dots, asterisks);
        }
	}
	
    private static String newStringOfChars(char sign, int length) {
    	String stringOfChars = new String(new char[length]).replace('\0', sign);
    	
        return stringOfChars;
    }
}