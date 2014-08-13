import java.util.Scanner;

/*
Write a program to find how many times given string appears 
in given text as substring. The text is given at the first 
input line. The search string is given at the second input 
line. The output is an integer number. Please ignore the 
character casing. 
*/
public class CountSubstringOccurrences {

	public static void main(String[] args) {
		// Variables
		String text = "", word = "";
		int count = 0, textLength = 0, wordlength = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			text = input.nextLine().toLowerCase();
			word = input.nextLine().toLowerCase();
		}
		
		// Calculation
		textLength = text.length();
		wordlength = word.length();
		for (int i = 0; i <= textLength - wordlength; i++) {
			if (text.substring(0 + i, wordlength + i).contains(word)) {
				count++;
			}
		}
		
		// Output
		System.out.println(count);
	}
}