package JavaSyntax;

import java.util.Scanner;

public class FormattingNumbers {

	public static void main(String[] args) {
		// Variables
		int decimalNumber = 0;
		String hexadecimalNumber = "",
				binaryNumber = "";
		double numberB = 0d, numberC = 0d;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			decimalNumber = input.nextInt();
			numberB = input.nextDouble();
			numberC = input.nextDouble();
		}
		// Calculations
		hexadecimalNumber = Integer.toHexString(decimalNumber).toUpperCase();
		hexadecimalNumber = String.format("%-10s", hexadecimalNumber);
		
		binaryNumber = Integer.toBinaryString(decimalNumber);
		binaryNumber = String.format("%10s", binaryNumber).replace(" ", "0");
		
		// Output
		System.out.printf("|%1$s|%2$s|%3$10.2f|%4$-10.3f|",
				hexadecimalNumber, binaryNumber, numberB, numberC);
	}
}