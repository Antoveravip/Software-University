package JavaLoopsMethodsClasses;

import java.util.Scanner;

/*
Symmetric Numbers in Range
Write a program to generate and print all symmetric numbers in given
range [start…end]. A number is symmetric if its digits are symmetric
toward its middle. For example, the numbers 101, 33, 989 and 5 are
symmetric, but 102, 34 and 997 are not symmetric. 
*/
public class SymmetricNumbersInRange {

	public static void main(String[] args) {
		// Variables
		int start = 0, end = 0, length = 0;
		boolean isSymmetric = true;
		
		// Input
		try(Scanner scan = new Scanner(System.in)) {
			//System.out.print("Enter start range value: ");
			start = scan.nextInt();
			//System.out.print("Enter end range value: ");
			end = scan.nextInt();
		}

		// Calculations
		for (int i = start; i <= end; i++) {
			char[] number = Integer.toString(i).toCharArray();
			isSymmetric = true;
			length = number.length;
			for (int k = 0, l = 1; k < length/2; k++, l++) {
				if (isSymmetric) {
					if (number[k] != number[length-l]) {
						isSymmetric = false;
					}
				}
			}
			
			// Output
			if(isSymmetric) {
				System.out.print(i + " ");
			}
		}
	}
}