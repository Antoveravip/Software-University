package JavaSyntax;

import java.util.Scanner;

public class DecimalToHexadecimal {
	
	public static void main(String[] args) {
		// Variables
		int decimalNumber = 0;
		String hexadecimalNumber = "";
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			decimalNumber = input.nextInt();
		}
		
		// Calculations
		// There are many ways to do such conversion
		// TODO - check test for speed of each conversion
		
		// First way - build-in Java library
		hexadecimalNumber = Integer.toHexString(decimalNumber).toUpperCase();
		System.out.println("With build-in library:");
		System.out.printf("The decimal number %1$s is hexadecimal number %2$s.\r\n", decimalNumber, hexadecimalNumber);
		
		// Empty the variable to test another ways
		hexadecimalNumber = ""; 
		
		// Second way - with custom conversion
        int remainder = 1, number = decimalNumber;

        while (number != 0) {
            remainder = number % 16;
            number /= 16;
            if (remainder > 9) {
                switch (remainder) {
                    case 10: { hexadecimalNumber = "A" + hexadecimalNumber; break; }
                    case 11: { hexadecimalNumber = "B" + hexadecimalNumber; break; }
                    case 12: { hexadecimalNumber = "C" + hexadecimalNumber; break; }
                    case 13: { hexadecimalNumber = "D" + hexadecimalNumber; break; }
                    case 14: { hexadecimalNumber = "E" + hexadecimalNumber; break; }
                    case 15: { hexadecimalNumber = "F" + hexadecimalNumber; break; }
                    default: { break; }                        
                }
            }
            else {
                hexadecimalNumber = remainder + hexadecimalNumber;
            }            
        }
        
		System.out.println("With one kind custom conversion:");
		System.out.printf("The decimal number %1$s is hexadecimal number %2$s.\r\n", decimalNumber, hexadecimalNumber);
		
		// Empty the variable to test another ways
		hexadecimalNumber = ""; 
				
		// Third way - another custom conversion
		hexadecimalNumber = toHexString(decimalNumber);
		
		System.out.println("With other kind custom conversion:");
		System.out.printf("The decimal number %1$s is hexadecimal number %2$s.\r\n", decimalNumber, hexadecimalNumber);	
	}
	
	 public static char toHexChar(int num) {
		 num &= 15;
		 
		 return (num < 10) ? (char)(num + 48) : (char)(num + 55);
	 }
	
	 public static String toHexString(int decimalNumber) {
		 char[] chars = new char[8];
		 char current;
		 for (int i = 0; i < 8; i++) {
			 current = toHexChar(decimalNumber);
			 if(current != '0') {
				 chars[7-i] = current;
			 }
			 else {
				 chars[7-i] = ' ';
			 }
			 
			 decimalNumber >>= 4;
		 }
		 
		 return new String(chars).trim();
	 }
}