import java.util.Scanner;

public class VideoDurations {

	public static void main(String[] args) {
		// Variables
		String inputData = "";
		String[] currentDuration;
		int hours = 0, minutes = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			while(true) {
				inputData = input.next();
				if(inputData.equals("End")) {
					break;
				}
				currentDuration = inputData.split(":");
				hours += Integer.parseInt(currentDuration[0]);
				minutes += Integer.parseInt(currentDuration[1]);				
			}
		}
		
		// Calculation
		hours += minutes / 60;
		minutes = minutes % 60;

		
		// Output
		System.out.printf("%1$s:%2$02d", hours, minutes);
	}
}