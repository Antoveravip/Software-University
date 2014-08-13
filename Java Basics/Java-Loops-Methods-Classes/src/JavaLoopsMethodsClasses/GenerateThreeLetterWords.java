package JavaLoopsMethodsClasses;

import java.util.Scanner;

/*
Write a program to generate and print all 3-letter words consisting of
given set of characters. For example if we have the characters 'a' and 
'b', all possible words will be "aaa", "aab", "aba", "abb", "baa", "bab",
"bba" and "bbb". The input characters are given as string at the first 
line of the input. Input characters are unique (there are no repeating 
characters).
*/
public class GenerateThreeLetterWords {

	public static void main(String[] args) {
		// Variables
		String inputChars = "", word = "", separator = " ";
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			//System.out.print("Enter chars: ");
			inputChars = input.next();
		}
		
		// Calculations
		int length = inputChars.length();		
		for(int i = 0; i < length; i++) {
			for(int k = 0; k < length; k++) {
				for(int l = 0; l < length; l++) {
					word = "" + inputChars.charAt(i) +  inputChars.charAt(k) + inputChars.charAt(l);
					if(i == length - 1 && k == length - 1 && l == length - 1) {
						word += "";
					}
					else {
						word += separator;
					}
					// Output
					System.out.print(word);
				}
			}
		}
	}
}