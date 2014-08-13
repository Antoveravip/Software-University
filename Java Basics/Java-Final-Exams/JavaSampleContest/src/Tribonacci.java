import java.math.BigDecimal;
import java.util.Scanner;

public class Tribonacci {

	public static void main(String[] args) {
		// Variables
		BigDecimal firstTribMember = new BigDecimal(1), 
				secondTribMember = new BigDecimal(1),
				thirdTribMember = new BigDecimal(1),
				currentTribMember = new BigDecimal(1);
		int num = 0;
		String output = "";
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			firstTribMember = new BigDecimal(input.nextLine());
			secondTribMember = new BigDecimal(input.nextLine());
			thirdTribMember = new BigDecimal(input.nextLine());
			num = Integer.parseInt(input.nextLine());
		}
		
		// Calculation
        if (num == 1) {
        	output = "" + firstTribMember;
        } else if (num == 2) {
        	output = "" + secondTribMember;
        } else if (num == 3) {
        	output = "" + thirdTribMember;
        } else {
            for (int i = 4; i <= num; i++) {
            	currentTribMember = firstTribMember.add(secondTribMember).add(thirdTribMember);
            	firstTribMember = secondTribMember;
            	secondTribMember = thirdTribMember;
            	thirdTribMember = currentTribMember;
            }
            
            output = "" + currentTribMember;
        }
        
		// Output
		System.out.println(output);
	}
}