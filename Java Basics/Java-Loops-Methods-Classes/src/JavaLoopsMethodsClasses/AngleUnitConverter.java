package JavaLoopsMethodsClasses;

import java.util.Scanner;
/*
Angle Unit Converter (Degrees <--> Radians)
Write a method to convert from degrees to radians. Write a method to convert from
radians to degrees. You are given a number n and n queries for conversion. Each 
conversion query will consist of a number + space + measure. Measures are "deg" 
and "rad". Convert all radians to degrees and all degrees to radians. Print the 
results as n lines, each holding a number + space + measure. Format all numbers 
with 6 digit after the decimal point.
*/
public class AngleUnitConverter {

	public static void main(String[] args) {
		// Variables
		int num = 0; double rad = 0, deg = 0, inpVal = 0;
		String convType = "", result = "";
		StringBuilder output = new StringBuilder();
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			//System.out.print("Enter number of conversions: ");
			num = input.nextInt();
			for(int i = 0; i < num; i++) {
				//System.out.print("Enter value for conversion: ");
				inpVal = input.nextDouble();
				convType = input.next();
				if(convType.equals("rad")) {
					rad = inpVal;
					deg = Math.toDegrees(rad);
					result = String.format("%6f deg\r\n", deg);
					output.append(result);
				}
				else if(convType.equals("deg")) {
					deg = inpVal;
					rad = Math.toRadians(deg);
					result = String.format("%6f rad\r\n", rad);
					output.append(result);
				}
			}
		}
		
		// Output
		System.out.println(output);
	}
}