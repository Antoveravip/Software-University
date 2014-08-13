package JavaLoopsMethodsClasses;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/*
Write a program to read a text file "Input.txt" holding a sequence
of integer numbers, each at a separate line. Print the sum of the
numbers at the console. Ensure you close correctly the file in case 
of exception or in case of normal execution. In case of exception 
(e.g. the file is missing), print "Error" as a result. 
*/
public class SumNumbersFromATextFile {

	public static void main(String[] args) {
		// Variables
		int sum = 0;
		
		// Input
		try(BufferedReader fileReader = new BufferedReader(new FileReader("Input.txt"));) { 
			// Calculations
			while(true) {
				String line = fileReader.readLine();
				if(line == null) {
					break;
				}
				sum += Integer.parseInt(line);
			}
			
			// Output
			System.out.println(sum);
		} catch (IOException ioe) {
			System.out.println("Error");
		}	
	}
}