import java.util.ArrayList;
import java.util.Scanner;

/*
Write a program that reads two lists of letters l1 and l2
and combines them: appends all letters c from l2 to the 
end of l1, but only when c does not appear in l1. Print 
the obtained combined list. All lists are given as sequence
of letters separated by a single space, each at a separate 
line. Use ArrayList<Character> of chars to keep the input 
and output lists. 
*/
public class CombineListsOfLetters {

	public static void main(String[] args) {
		// Variables
        ArrayList<Character> firstList = new ArrayList<>();
        ArrayList<Character> output = new ArrayList<>();
        char[] firstInputData, secondInputData;
        
		// Input
        try (Scanner input = new Scanner(System.in)) {
        	// Read the input lines, remove white spaces and 
        	firstInputData = input.nextLine().replaceAll("\\s+", "").toCharArray();
        	secondInputData = input.nextLine().replaceAll("\\s+", "").toCharArray();
        }
        
		// Calculation
        for (char letter : firstInputData) {
   	 		firstList.add(letter);
        }
        
        output.addAll(firstList);
        for (char letter : secondInputData) {
            if (!firstList.contains(letter)) {
            	output.add(letter);
            }
        }
        
		// Output
        for (char letter : output) {
            System.out.print(letter + " ");
        }            
	}
}