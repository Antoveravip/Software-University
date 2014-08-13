package JavaSyntax;

import java.util.Scanner;

public class CountOfBitsOne {

	public static void main(String[] args) {
		// Variables
		int number = 0, count = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)){
			number = input.nextInt();
		}
		
		// Calculations
		
		// First way - with build-in library
		count = Integer.bitCount(number);
		
		// Second way - custom count
		count = 0;
		count = countOnesBits(number);
		
		// Output
		System.out.println(count);
	}

	private static int countOnesBits(int number) {
		int count = 0;
		while(number != 0) {
			if((number & 1) > 0) {
				count++;
			}
			number = number >>> 1;
		}		
		
		return count;
	}
	
	// If I need to count zero bits
	/*
	private static int countZeroBits(int number) {
		int count = 0;
		while(number != 0) {
			if((number & 1) == 0) {
				count++;
			}
			number = number >>> 1;
		}		
		
		return count;
	}
	*/
}