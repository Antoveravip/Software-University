import java.util.Scanner;
/*
Write a program to find how many times a word appears in given text. 
The text is given at the first input line. The target word is given 
at the second input line. The output is an integer number. Please 
ignore the character casing. Consider that any non-letter character
is a word separator.
*/
public class CountSpecifiedWord {

	public static void main(String[] args) {
		// Variables
		String text = "", word = "";
		String[] words;
		int count = 0, length = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			text = input.nextLine().toLowerCase();
			word = input.nextLine().toLowerCase();
		}
		
		// Calculation
		words = text.split("\\W+");
		length = words.length;
		for (int i = 0; i < length; i++) {
			if (word.equals(words[i])) {
				count++;
			}
		}
		
		// Output
		System.out.println(count);		
	}
}