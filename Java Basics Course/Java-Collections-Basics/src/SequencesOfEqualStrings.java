import java.util.Scanner;

/*
Write a program that enters an array of strings and finds in it 
all sequences of equal elements. The input strings are given as
a single line, separated by a space. 
*/
public class SequencesOfEqualStrings {

	public static void main(String[] args) {
		// Variables
		String inputData = "";
		String[] substrings;
		
		// Input
		try(Scanner input = new Scanner(System.in);) {
			inputData = input.nextLine();
			substrings = inputData.split(" ");
		}
		
		// Calculation and output
		System.out.print(substrings[0]);
		for (int i = 1; i < substrings.length; i++) {
			if (substrings[i].equals(substrings[i - 1])) {
				System.out.print(" " + substrings[i]);
			} else {
				System.out.println();
				System.out.print(substrings[i]);
			}
		}
	}
}