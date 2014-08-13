package JavaSyntax;

import java.math.BigDecimal;
import java.util.Scanner;

public class TheSmallestOfThreeNumbers {

	public static void main(String[] args) {
		// Variables
		double current, smallest = Double.MAX_VALUE;
		
		// Input and calculations
		try(Scanner input = new Scanner(System.in)) {
			for(int i = 0; i < 3; i++){
				current = input.nextDouble();
				if(current < smallest){
					smallest = current;
				}
			}
		}
		
		// Output
		System.out.println(new BigDecimal(Double.toString(smallest)).stripTrailingZeros().toPlainString());
	}
}