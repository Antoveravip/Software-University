import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Scanner;

public class SimpleExpression {

	public static void main(String[] args) {
		// Variables
		String expression = "";
		String[] numbers;
		BigDecimal sum = new BigDecimal(0);
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			expression = input.nextLine();
			expression = expression.replaceAll(" ", "").trim();
			numbers = expression.split("[-+*/]");
		}
		
		// Calculation
		int length = expression.length(), index = 0;
		sum = sum.add(new BigDecimal(numbers[index]));
		for(int i=0; i < length; i++) {
			if(expression.charAt(i)== '+') {
				index++;
				sum = sum.add(new BigDecimal(numbers[index]));
			} else if(expression.charAt(i)== '-') {
				index++;
				sum = sum.subtract(new BigDecimal(numbers[index]));
			}
		}
		
		// Output
		DecimalFormat bdFormat = new DecimalFormat("###.#########");
		System.out.println(bdFormat.format(sum));
	}
}