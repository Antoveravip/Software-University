import java.util.Scanner;

public class LongestOddEvenSequence {

	public static void main(String[] args) {
		// Variables
		int length, count = 0, maxCount = 0, currentNum;
		String inputData = "";
		String[] numbers;
		boolean zeroIsOdd = true, prevNumIsOdd = true, currentNumIsOdd = true;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			inputData = input.nextLine();
			inputData = inputData.replaceAll(" ", "").replaceAll("\\(", "").trim();
			numbers = inputData.split("[x|\\)]");
		}
		
		// Calculation
		length = numbers.length;
		for(int i = 0; i < length; i++) {
			currentNum = Integer.parseInt(numbers[i]);
			if(currentNum == 0)
				if(prevNumIsOdd) { 
					zeroIsOdd = false;
				} else {
					zeroIsOdd = true;
			}
			// Check for even number
			if((currentNum != 0 && currentNum % 2 == 0)
					|| (currentNum == 0 && zeroIsOdd == false)) {
				currentNumIsOdd = false;
			} else if ((currentNum != 0 && currentNum % 2 != 0)
					|| (currentNum == 0 && zeroIsOdd == true)) {
				currentNumIsOdd = true;
			}
			
			// Check for previous number
			if((!currentNumIsOdd && prevNumIsOdd) || (currentNumIsOdd && !prevNumIsOdd)) {
				count++;
			} else {
				count = 1;
			}

			if(count > maxCount) {
				maxCount = count;
			}
			
			prevNumIsOdd = currentNumIsOdd;
		}
		
		// Output
		System.out.println(maxCount);
	}
}