import java.util.Scanner;
/*
Write a program to count the number of words in given 
sentence. Use any non-letter character as word separator.
*/
public class CountAllWords {

	public static void main(String[] args) {
		// Variables
		String inputData = "";
		
		// Input
		try(Scanner input = new Scanner(System.in);) {
			inputData = input.nextLine();
		}
	
		// Calculation
		String[] words = inputData.split("\\W+");
		
		// Output
		System.out.println(words.length);
	}
}