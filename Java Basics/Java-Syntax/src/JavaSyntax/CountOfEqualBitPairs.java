package JavaSyntax;

import java.util.Scanner;

public class CountOfEqualBitPairs {

	public static void main(String[] args) {
		// Variables
		int number = 0, count = 0, countOne = 0, countZero = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)){
			number = input.nextInt();
		}
		
		// Calculations
		while(number != 0) {
			if((number & 1) > 0) {
				countZero = 0;
				countOne++;
				if(countOne == 2) {
					count++;
					countOne = 1;
				}
			}
			else {
				countOne = 0;
				countZero++;
				if(countZero == 2) {
					count++;
					countZero = 1;
				}
			}
			number = number >>> 1;
		}	
		
		// Output
		System.out.println(count);
	}
}