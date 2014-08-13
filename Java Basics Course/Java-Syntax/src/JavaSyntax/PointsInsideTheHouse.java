package JavaSyntax;

import java.util.Locale;
import java.util.Scanner;

public class PointsInsideTheHouse {

	public static void main(String[] args) {
		// Constants
		Locale.setDefault(Locale.ROOT);
		double roofAx = 17.5, roofAy = 3.5, rectX = 12.5, rectY = 8.5, width = 10, height = 5,
				emptyAreaX = 17.5, emptyAreaY = 8.5, eaWidth = 2.5, eaHeight = 5;
		
		// Variables		
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
		// Check if the point is in the roof of the house via Barycentric technique: http://www.blackpawn.com/texts/pointinpoly/
		double roofBx = rectX, roofBy = rectY, roofCx = rectX + width, roofCy = rectY;
		double alpha = ((roofBy - roofCy) * (pointX - roofCx) + (roofCx - roofBx) * (pointY - roofCy)) /
		        ((roofBy - roofCy) * (roofAx - roofCx) + (roofCx - roofBx) * (roofAy - roofCy));
		double beta = ((roofCy - roofAy) * (pointX - roofCx) + (roofAx - roofCx) * (pointY - roofCy)) /
		       ((roofBy - roofCy) * (roofAx - roofCx) + (roofCx - roofBx) * (roofAy - roofCy));
		double gamma = 1.0d - alpha - beta;
		
		if(alpha >= 0 && beta >= 0 && gamma >= 0) {
			output = "Inside";
		}
		// I check with idea that point must be in the floor, but out of the door.
		else if(pointX < rectX || pointX > (rectX + width) || pointY < rectY || pointY > rectY + height){
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