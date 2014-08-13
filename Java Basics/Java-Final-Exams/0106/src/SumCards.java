import java.util.Scanner;

public class SumCards {

	public static void main(String[] args) {
		// Variables
		int sum = 0, currentSum = 0, two = 2, lastValue = 0, coupleSum = 0, length = 0, value = 0;
		String[] cardFaces;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			cardFaces = input.nextLine().replaceAll(" ", "").split("[xS|xH|xD|xC]");
		}
		
		// Calculation
		length = cardFaces.length;
		for(int i = 0; i < length; i++) {
			value = cardValue(cardFaces[i]);
			if(i == 0) {
				lastValue = 0;
			}			
			if(value == lastValue) {
				coupleSum += value;
				currentSum = coupleSum * two;
			} else {	
				sum +=currentSum;
				lastValue = value;
				coupleSum = value;
				currentSum = value;
			}		
		}
		
		sum +=currentSum;
		
		// Output
		System.out.println(sum);
	}
	
	private static int cardValue(String cardFace) {
		int value = 0;
		switch(cardFace) {
			case "2": value = 2; break;
			case "3": value = 3; break;
			case "4": value = 4; break;
			case "5": value = 5; break;
			case "6": value = 6; break;
			case "7": value = 7; break;
			case "8": value = 8; break;
			case "9": value = 9; break;
			case "10": value = 10; break;
			case "J": value = 12; break;
			case "Q": value = 13; break;
			case "K": value = 14; break;
			case "A": value = 15; break;
	        default: value = 0; break;
		}
		
		return value;
	}
}