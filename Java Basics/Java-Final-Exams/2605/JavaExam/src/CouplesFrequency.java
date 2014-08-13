import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class CouplesFrequency {

	public static void main(String[] args) {
		// Variables
		String[] numbers;
		String[] inputData;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			inputData = input.nextLine().split(" ");
		}
		
		// Calculation
		numbers = new String[inputData.length - 1];
		for(int i = 0; i < inputData.length - 1; i++) {
			numbers[i] = inputData[i] + " " + inputData[i+1];

		}
		
		Map<String, Integer> coupleFrequency = new LinkedHashMap<String, Integer>();
		for (String couple : numbers) {
			Integer counter = coupleFrequency.get(couple);
			if (counter == null) {
				counter = 0;
			}
			coupleFrequency.put(couple, counter + 1);
		}
		
		// Output		
		for (Map.Entry<String, Integer> frequencyOfCouple : coupleFrequency.entrySet()) {
			double precentage = (double) frequencyOfCouple.getValue() * 100 / numbers.length;
			System.out.printf("%s -> %.2f%%\n", frequencyOfCouple.getKey(), precentage);
		}
	}
}