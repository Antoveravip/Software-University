import java.util.Arrays;
import java.util.Scanner;

/*
Write a program to enter a number n and n integer numbers and
sort and print them. Keep the numbers in array of integers: int[]. 
*/
public class SortArrayOfNumbers {

	public static void main(String[] args) {
		// Variables
		int[] numbers;
		int length = 0, num = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			num = input.nextInt();
			input.nextLine();
			numbers = new int[num];
			length = numbers.length;
			for (int i = 0; i < length; i++) {
				numbers[i] = input.nextInt();
			}
		}
		
		// Calculations
		Arrays.sort(numbers);
		
		// Output
		for (int k = 0; k < length; k++) {
			System.out.print(numbers[k]);
			if(k < length - 1) {
				System.out.print(" ");
			}
		}
	}
}