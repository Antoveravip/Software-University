import java.util.Scanner;

public class MagicCarNumbers {

	public static void main(String[] args) {
		// Variables
		int weight = 0, magicCarNumbers = 0;
		char[] carLetters = { 'A', 'B', 'C', 'E', 'H', 'K', 'M', 'P', 'T', 'X' };
		int length = carLetters.length;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			weight = input.nextInt();
		}
		
		// Calculation
		if(weight >= 60 || weight <= 556) {
			for(int x = 0; x < length; x++) {
				for(int y = 0; y < length; y++) {
					for(int a = 0; a <= 9; a++) {
						magicCarNumbers += CheckCarNumberWeigth("CA" + a + a + a + a + carLetters[x] + carLetters[y], weight);
						for(int b =0; b <= 9; b++) {	
							if(b == a) {
								continue;
							}
							magicCarNumbers += CheckCarNumberWeigth("CA" + a + a + a + b + carLetters[x] + carLetters[y], weight);
							magicCarNumbers += CheckCarNumberWeigth("CA" + a + b + b + b + carLetters[x] + carLetters[y], weight);
							magicCarNumbers += CheckCarNumberWeigth("CA" + a + a + b + b + carLetters[x] + carLetters[y], weight);
							magicCarNumbers += CheckCarNumberWeigth("CA" + a + b + a + b + carLetters[x] + carLetters[y], weight);
							magicCarNumbers += CheckCarNumberWeigth("CA" + a + b + b + a + carLetters[x] + carLetters[y], weight);
						}
					}
				}
			}
		}

		// Output
		System.out.println(magicCarNumbers);
	}
	
	private static int CheckCarNumberWeigth(String carNumber, int weigth) {
		int currentWeigth = 0;
		int carCount = 0;
		for(int i = 0; i < carNumber.length(); i++) {
			char sign = carNumber.charAt(i);
		    if (sign >= '0' && sign <= '9') {
		    	currentWeigth += (sign - '0');
		    } else {
		    	currentWeigth += (10 * (sign - 'A' + 1));
		    }
		}

		if (currentWeigth == weigth) {
			carCount++;
			//System.out.println(carNumber);
		}
		
		return carCount;
	}
}