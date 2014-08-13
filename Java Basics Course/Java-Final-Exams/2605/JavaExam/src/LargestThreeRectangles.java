import java.util.Scanner;

public class LargestThreeRectangles {

	public static void main(String[] args) {
		// Variables
		int area = 0, maxArea = 0, length = 0, count = 0;
		int[] areas;
		String inputData = "";
		String[] numbers;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			inputData = input.nextLine();
			inputData = inputData.replaceAll(" ", "").replaceAll("\\[", "").trim();
			numbers = inputData.split("[x|\\]]");
		}
		
		// Calculation
		length = numbers.length;
		areas = new int[length/2];
		for(int i = 0, k = 0; i < numbers.length; i+=2, k++) {
			areas[k] = Integer.parseInt(numbers[i]) * Integer.parseInt(numbers[i+1]);
		}
		
		while(count + 2 < areas.length) {
			area = areas[count] + areas[count + 1] + areas[count + 2];
			if(area > maxArea){
				maxArea = area;
			}
			count++;
		}
		
		// Output
		System.out.println(maxArea);
	}
}