package SortArrayOfStrings;

import java.util.Scanner;
import java.util.Arrays;

public class SortArrayOfStrings {

	public static void main(String[] args) {
		int n; 
		String[] words;
		try(Scanner input = new Scanner(System.in);){
			System.out.printf("Enter how many words you will enter: ");
	        n = input.nextInt();
	        words = new String[n];
	        
	        for(int i = 0;i < n;i++)
	        {
	        	System.out.printf("Enter the word: ");
	        	words[i] = input.next();
	        }
		}
		
        Arrays.sort(words);
        
        for(int i=0;i<n;i++)
        {
                System.out.println(words[i]);
        }
	}
}