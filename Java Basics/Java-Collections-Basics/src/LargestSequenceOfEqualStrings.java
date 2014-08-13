import java.util.Scanner;

/*
Write a program that enters an array of strings and finds 
in it the largest sequence of equal elements. If several 
sequences have the same longest length, print the leftmost 
of them. The input strings are given as a single line, 
separated by a space. 
*/
public class LargestSequenceOfEqualStrings {

	public static void main(String[] args) {
		// Variables
		int length = 1, maxLength = 1, index = 0, substrLength = 0;
		String inputData = "";
		String[] substrings;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			inputData = input.nextLine();
			substrings = inputData.split(" ");
			substrLength = substrings.length;
		}
		
		// Calculation
        for (int i = 1; i < substrLength; i++) {
            if (substrings[i].equals(substrings[i - 1])) {
                length++;
                if (length > maxLength)
                {
                	maxLength = length;
                	index = i;                    
                }
            } else {
                length = 1;
            }
        }
        
		// Output
		for (int i = 0; i < maxLength; i++) {
			System.out.print(substrings[index]);
			if(i < maxLength - 1) {
				System.out.print(" ");
			}
		}
	}
}