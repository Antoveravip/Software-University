import java.util.Scanner;

public class MCNAproach {

	public static void main(String[] args) {
		// Variables
		int weight = 0, count = 40, magicCarNumbers = 0, lettersCount = 0;
		int[] lettersWeight = { 10, 20, 30, 50, 80, 110, 130, 160, 200, 240 };
		//char[] carLetters = { 'A', 'B', 'C', 'E', 'H', 'K', 'M', 'P', 'T', 'X' };
		String[] numbersPattern = { "aaaa", "abbb", "aaab", "aabb", "abab", "abba" };
		//String firstLetters = "CA", currentCarNumber = "", separator = "", currentNumbers = "";
		//StringBuilder carList = new StringBuilder();
		int length = numbersPattern.length;
		String pattern = "";
		boolean notChecked = true;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			weight = input.nextInt();
		}
		
		// Calculation
		if(weight >= 60 || weight <= 556) {
			for(int x = 1; x <= 9; x++) {
				count += lettersWeight[x];
				if(count >= weight) {
					count -= lettersWeight[x];
					continue;
				}
				for(int y = 2; y <= 9; y++) {
					count += lettersWeight[y];
					if(count > weight) {
						count -= lettersWeight[y];
						continue;
					}
					lettersCount = count;
					for(int a = 0; a <= 9; a++) {
						notChecked = true;
						for(int b =0; b <= 9; b++) {	
							if(b == a) {
								continue;
							}
							for(int i = 0; i < length; i++) {
								if(i == 0 && notChecked) {
									pattern = numbersPattern[0];
									notChecked = false;
								} else if(i == 0 && !notChecked) {
									continue;
								} else {
									pattern = numbersPattern[i];
								}
								for(int k = 0; k < 4; k++) {
									if(pattern.charAt(k) == 'a') {
										count += a;
										//currentNumbers += "" + a;
									} else if(pattern.charAt(k) == 'b') {
										count += b;
										//currentNumbers += "" + b;
									}
									if(count > weight) {
										count = lettersCount;
										//currentNumbers = "";
										break;
									}
								}
								if(count == weight) {
									if(count == lettersCount && count == 60) {
										magicCarNumbers = 1;
									} else {
										magicCarNumbers++;
									}
									//currentCarNumber ="" + firstLetters + currentNumbers + carLetters[x] + carLetters[y];
									//carList.append(separator + currentCarNumber);
									//separator = ", ";
								}
								//currentNumbers = "";
								count = lettersCount;
							}
						}
					}
					count -= lettersWeight[y];
				}
				count = 40;
			}
		}

		// Output
		System.out.println(magicCarNumbers);
		//System.out.println(carList.toString());
	}
}		
		/*
		// More simple way with all possible variants and print of each car number
		// Variables
		int weight = 0, count = 40, magicCarNumbers = 0;
		int[] lettersWeight = { 10, 20, 30, 50, 80, 110, 130, 160, 200, 240 };
		char[] carLetters = { 'A', 'B', 'C', 'E', 'H', 'K', 'M', 'P', 'T', 'X' };
		String firstLetters = "CA", currentCarNumber = "", separator = "";
		StringBuilder carList = new StringBuilder();
		// Input
		try(Scanner input = new Scanner(System.in)) {
			weight = Integer.parseInt(input.nextLine());
		}
		
		// Calculation
		for(int i = 0; i <= 9; i++) {
			if(i == 0 && weight <= 40) {
				break;
			}
			count += i;
			if(count >= weight) {
				count -= i;
				continue;
			}
			for(int k = 0; k <= 9; k++) {
				count += k;
				if(count >= weight) {
					count -= k;
					continue;
				}
				for(int l = 0; l <= 9; l++) {
					count += l;
					if(count >= weight) {
						count -= l;
						continue;
					}
					for(int m = 0; m <= 9; m++) {
						count += m;
						if(count >= weight) {
							count -= m;
							continue;
						}
						for(int x = 0; x <= 9; x++) {
							count += lettersWeight[x];
							if(count >= weight) {
								count -= lettersWeight[x];
								continue;
							}
							for(int y = 0; y <= 9; y++) {
								count += lettersWeight[y];
								if(count == weight) {
									magicCarNumbers++;
									currentCarNumber ="" + firstLetters + i + k + l + m + carLetters[x] + carLetters[y];
									carList.append(separator + currentCarNumber);
									separator = ", ";
									
								}
								count -= lettersWeight[y];
							}
							count -= lettersWeight[x];
						}
						count -= m;
					}
					count -= l;
				}
				count -= k;
			}			
			count = 40;
		}
		
		// Output
		System.out.println(magicCarNumbers);
		System.out.println(carList.toString());
		*/
