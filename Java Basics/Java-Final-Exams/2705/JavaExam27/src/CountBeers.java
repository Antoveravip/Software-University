import java.util.Scanner;

public class CountBeers {

	public static void main(String[] args) {
		// Variables
		String inputData = "", measure = "";
		String[] currentLine;
		int stacks = 0, beers = 0, count = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			while(true) {
				inputData = input.nextLine();
				if(inputData.equals("End")) {
					break;
				}
				currentLine = inputData.split(" ");
				count = Integer.parseInt(currentLine[0]);
				measure = currentLine[1];
				if(measure.equals("stacks")) {
					stacks += count;
				} else if(measure.equals("beers")) {
					beers += count;
				}				
			}
		}
		
		// Calculation
		stacks += beers / 20;
		beers = beers % 20;
		
		// Output
		System.out.printf("%1$s stacks + %2$d beers", stacks, beers);
	}
}