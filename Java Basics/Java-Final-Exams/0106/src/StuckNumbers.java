import java.util.Scanner;

public class StuckNumbers {

	public static void main(String[] args) {
		// Variables
		int num = 0, first = 0, second = 0;
		String[] numbers;
		String firstNum = "", secondNum = "";
		boolean noAnswer = true;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			num = Integer.parseInt(input.nextLine());
			String in =input.nextLine();
			numbers = in.split(" ");
		}
		
		// Calculation
		// I'm sure there is more simple solution, but I'm too sleepy and lazy to think :)
		// I change my mind :) :) :)
		
		// First way - with four nested loops
		for(int i = 0; i < num; i++) {
			for(int k = 0; k < num; k++) {
				if(numbers[i].equals(numbers[k])) {
					continue;
				}
				firstNum = "" + numbers[i] + numbers[k];
				first = Integer.parseInt(firstNum);
				for(int m = 0; m < num; m++) {
					if(numbers[m].equals(numbers[i]) || numbers[m].equals(numbers[k])) {
						continue;
					}
					for(int n = 0; n < num; n++) {
						if(numbers[n].equals(numbers[i]) || numbers[n].equals(numbers[k]) || numbers[n].equals(numbers[m])) {
							continue;
						}

						secondNum = "" + numbers[m] + numbers[n];
						second = Integer.parseInt(secondNum);
						// Output
						if(first == second) {
							System.out.printf("%1$s|%2$s==%3$s|%4$s\r\n", numbers[i], numbers[k], numbers[m], numbers[n]);
							noAnswer =  false;
						}
					}
				}
			}
		}
		// No answer output
		if(noAnswer) {
			System.out.println("No");
		}
		
		/*
		// Second way - little sophisticated with matrix (and keeping the result)
		int[][] allNumbers = new int[num][num];
		String current = "";
		int currentNum = 0;
		
		for(int p = 0; p < num; p++) {
			for(int r = 0; r < num; r++) {
				if(r != p) {
					current = "" + numbers[p] + numbers[r];					
				} else {
					current = "0";
				}
				currentNum = Integer.parseInt(current);				
				allNumbers[p][r] = currentNum;
			}
		}

		for(int s = 0; s < num; s++) {
			for(int t = 0; t < num; t++) {
				if(t == s) {
					continue;
				}
				first = allNumbers[s][t];
				for(int x = 0; x < num; x++) {
					if(x == s || x == t) {
						continue;
					}
					for(int y = 0; y < num; y++) {
						if(y == s || y == t || y == x) {
							continue;
						}
						second = allNumbers[x][y];
						if(first == second) {
							System.out.printf("%1$s|%2$s==%3$s|%4$s\r\n", numbers[s], numbers[t], numbers[x], numbers[y]);
							noAnswer =  false;
						}
					}
				}
			}
		}
		// No answer output
		if(noAnswer) {
			System.out.println("No");
		}*/
	}
}