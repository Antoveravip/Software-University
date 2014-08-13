import java.util.Scanner;

public class ThreeLargestNumbers {

	public static void main(String[] args) {
		// Variables
		int num = 0;
		double currentNum, 
			first = -Double.MAX_VALUE, 
			second = -Double.MAX_VALUE, 
			third = -Double.MAX_VALUE;
		String inputData = "";
		String[] numbers = new String[3];
		
		// Input and calculation
		try(Scanner input = new Scanner(System.in)) {
			num = input.nextInt();
			for(int i = 0; i < num; i++) {
				inputData = input.next();
				currentNum = Double.parseDouble(inputData);
				if(currentNum >= first) {
					third = second;
					second = first;					
					first = currentNum;
					numbers[2] = numbers[1];
					numbers[1] = numbers[0];
					numbers[0] = inputData;
				} else if(currentNum < first && currentNum >= second) {
					third = second;
					second = currentNum;
					numbers[2] = numbers[1];
					numbers[1] = inputData;
				} else if(currentNum < second && currentNum >= third) {
					third = currentNum;
					numbers[2] = inputData;
				}
			}
		}
		
		// Output
		int length = numbers.length;
		for(int k = 0; k < length; k++) {
			if(numbers[k] != null) {
				System.out.println(numbers[k]);
			}
		}
	}
}