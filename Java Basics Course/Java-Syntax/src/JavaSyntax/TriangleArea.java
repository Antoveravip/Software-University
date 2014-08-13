package JavaSyntax;

import java.util.Locale;
import java.util.Scanner;

public class TriangleArea {

	public static void main(String[] args) {
		// Variables
		Locale.setDefault(Locale.ROOT);
		double area, pointAx, pointAy, pointBx, pointBy, pointCx, pointCy, sideA, sideB, sideC;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			System.out.print("Enter first point A coordinates: ");
			pointAx = input.nextDouble();
			pointAy = input.nextDouble();
			System.out.print("Enter second point B coordinates: ");
			pointBx = input.nextDouble();
			pointBy = input.nextDouble();
			System.out.print("Enter third point C coordinates: ");
			pointCx = input.nextDouble();
			pointCy = input.nextDouble();
		}
		
		// For seeing the points
		/*
		System.out.printf("Point A: (%1$.2f, %2$.2f)\r\n", pointAx, pointAy);
		System.out.printf("Point B: (%1$.2f, %2$.2f)\r\n", pointBx, pointBy);
		System.out.printf("Point C: (%1$.2f, %2$.2f)\r\n", pointCx, pointCy);
		*/
		
		// Calculations, checks and output result
		
		// First way - calculate sides by formula: http://www.mathopenref.com/coorddist.html ,
		// check if they form a triangle: http://www.mathopenref.com/triangleinequality.html
		// and calculate its area: http://www.mathopenref.com/heronsformula.html
		sideA = calculatePointsDistance(pointBx, pointBy, pointCx, pointCy);
		sideB = calculatePointsDistance(pointAx, pointAy, pointCx, pointCy);
		sideC = calculatePointsDistance(pointAx, pointAy, pointBx, pointBy);
		boolean isTriangle = checkIsTriangle(sideA, sideB, sideC);
		if(isTriangle) {
			area = calculateTriangleArea(sideA, sideB, sideC);
			System.out.printf("%1.0f\r\n", area);
		}
		else {
			System.out.println("0");
		}
		
		// Second way - calculate area by all points coordinates
		// - if area is round zero - so the points can't form a triangle
		// - using Coordinate Geometry: http://www.mathopenref.com/coordtrianglearea.html
		area = calculateTriangleArea(pointAx, pointAy, pointBx, pointBy, pointCx, pointCy);
		if(area != 0) {			
			System.out.printf("%1.0f\r\n", area);
		}
		else {
			System.out.println("0");
		}		
	}
	
	public static double calculatePointsDistance(double firstPointX, double firstPointY, double secondPointX, double secondPointY){
		double distance = 0d;
		distance = Math.sqrt(Math.pow((Math.abs(firstPointX - secondPointX)), 2) 
				+ Math.pow((Math.abs(firstPointY - secondPointY)), 2));
		return distance;
	}
	
	public static boolean checkIsTriangle(double sideA, double sideB, double sideC) {
		boolean isTriangle = false,
				firstRule = sideA + sideB > sideC,
				secondRule = sideB + sideC > sideA,
				thirdRule = sideA + sideC > sideB;
		
		if(firstRule && secondRule && thirdRule){
			isTriangle = true;
		}
		return isTriangle;
	}
	
	// Method calculateTriangleArea by 3 sides values
	public static double calculateTriangleArea(double sideA, double sideB, double sideC) {
		double area = 0, halfP = 0;
		halfP = (sideA + sideB + sideC) / 2;
		area = Math.sqrt(halfP * (halfP - sideA) * (halfP - sideB) * (halfP - sideC));
		return area;
	}
	
	// Method calculateTriangleArea by 3 points values
	public static double calculateTriangleArea(double pointAx, double pointAy, double pointBx, double pointBy, double pointCx, double pointCy){
		double area = 0;
		area = Math.abs((pointAx * (pointBy - pointCy) + pointBx * (pointCy - pointAy) + pointCx * (pointAy - pointBy)) / 2);
		return area;
	}
}