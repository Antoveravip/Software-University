import java.util.Scanner;

/*
Write a program to find all increasing sequences inside an
array of integers. The integers are given in a single line,
separated by a space. Print the sequences in the order of 
their appearance in the input array, each at a single line.
Separate the sequence elements by a space. Find also the 
longest increasing sequence and print it at the last line. 
If several sequences have the same longest length, print the
leftmost of them.
*/
public class LongestIncreasingSequence {

	public static void main(String[] args) {
		// Variables
		int length = 1, maxLength = 1, maxIndex = 0, arrLength = 0;
		String inputData = "";
		String[] substrings;
		int[] nums;
				
		// Input
		try(Scanner input = new Scanner(System.in)) {
			inputData = input.nextLine();
			substrings = inputData.split(" ");
		}
		
		// Calculation
		nums = new int[substrings.length];
		arrLength = nums.length;	
		
		for (int n = 0; n < arrLength; n++) {
			nums[n] = Integer.parseInt(substrings[n]);
		}
		
		System.out.print(nums[0]);
        for (int i = 1; i < arrLength; i++) {
            if (nums[i] > nums[i - 1]) {
                length++;
                if (length > maxLength){
                    maxIndex = i;
                    maxLength = length;
                }
                System.out.print(" " + nums[i]);
            } else {
                length = 1;
            	System.out.println();
            	System.out.print(nums[i]);
            }
        }
		
		// Output
    	System.out.println();
    	System.out.print("Longest: ");
		for (int k = maxIndex - maxLength + 1; k <= maxIndex; k++) {
			System.out.print(nums[k]);
			if(k < maxIndex) {
				System.out.print(" ");
			}
		}
	}
}