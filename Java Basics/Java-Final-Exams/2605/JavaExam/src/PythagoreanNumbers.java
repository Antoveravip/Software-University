import java.util.Arrays;
import java.util.Scanner;

public class PythagoreanNumbers {

	public static void main(String[] args) {
		// Variables
		int num = 0, currentNumber = 0, result = 0;
		Integer[] numbers, gradedNumbers;
		boolean numFound = false;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			num = input.nextInt();
			numbers = new Integer[num];
			gradedNumbers = new Integer[num];
			for(int i = 0; i < num; i++) {
				currentNumber = input.nextInt();
				numbers[i] = currentNumber;
				gradedNumbers[i] = currentNumber * currentNumber;
			}
		}
		
		// Calculation
		int length = numbers.length;
		for(int a = 0; a < length; a++) {
			for(int b = 0; b < length; b++) {
				if(numbers[a] > numbers[b]) {
					continue;
				}
				result = gradedNumbers[a] + gradedNumbers[b];
				int c = Arrays.asList(gradedNumbers).indexOf(result);
				if(c != -1) {
					// Output
					numFound = true;
					System.out.printf("%1$s*%1$s + %2$s*%2$s = %3$s*%3$s\r\n", numbers[a], numbers[b], numbers[c]);
				}
			}
		}
		
		if(!numFound) {
			System.out.println("No");
		}
	}
}