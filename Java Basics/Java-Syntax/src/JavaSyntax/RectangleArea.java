package JavaSyntax;

import java.util.Locale;
import java.util.Scanner;

public class RectangleArea {
	public static void main(String[] args) {
		// Variables
		Locale.setDefault(Locale.ROOT);
		double sideA = 0d, sideB = 0d, area = 0d;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {	
			System.out.print("Enter first side of rectangle: ");
			sideA = input.nextDouble();
			System.out.print("Enter second side of rectangle: ");
			sideB = input.nextDouble();
		}
		
		// Calculations
		area = sideA * sideB;
		
		// Output the result
		System.out.printf(
				"The area of rectangle with sides %1$.2f and %2$.2f is: %3$.2f",
				sideA, sideB, area);
	}
}
