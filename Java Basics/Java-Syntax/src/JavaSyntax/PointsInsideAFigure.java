package JavaSyntax;

import java.util.Locale;
import java.util.Scanner;

public class PointsInsideAFigure {
	public static void main(String[] args) {
		// Constants
		double figureX = 12.5, figureY = 6, width = 10, height = 7.5,
				emptyAreaX = 17.5, emptyAreaY = 8.5, eaWidth = 2.5, eaHeight = 5d;
		
		// Variables
		Locale.setDefault(Locale.ROOT);
		double pointX = 0, pointY = 0;
		String output = "";

		// Input
		try(Scanner input = new Scanner(System.in)) {
			//System.out.print("Enter point X coordinate: ");
			pointX = input.nextDouble();
			//System.out.print("Enter point Y coordinate: ");
			pointY = input.nextDouble();
		}
		
		// Calculations
		// I go with idea that point must be in main Figure, but out of missing part.
		if(pointX < figureX || pointX > (figureX + width) || pointY < figureY || pointY > figureY + height){
			output = "Outside";
		} 
		else {
			if(pointX <= emptyAreaX || pointX >= (emptyAreaX + eaWidth) || pointY <= emptyAreaY || pointY >= emptyAreaY + eaHeight) {
				output = "Inside";
			}
			else {
				output = "Outside";
			}
		}
		
		// Output
		System.out.println(output);
	}
}