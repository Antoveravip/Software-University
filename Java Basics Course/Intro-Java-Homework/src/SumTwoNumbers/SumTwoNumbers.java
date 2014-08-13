package SumTwoNumbers;
import java.util.Scanner;

public class SumTwoNumbers {

	public static void main(String[] args) {
		int firstNumber, secondNumber;
		try(Scanner readInput = new Scanner(System.in);) {
	        System.out.printf("Enter fist number: ");
	        firstNumber = readInput.nextInt();
	        System.out.printf("Enter second number: ");
	        secondNumber = readInput.nextInt();
		}        

        int result = firstNumber + secondNumber;
        System.out.println(result);
	}
}