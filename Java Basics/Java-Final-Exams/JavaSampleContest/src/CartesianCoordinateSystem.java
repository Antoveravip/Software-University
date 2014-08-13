import java.math.BigDecimal;
import java.util.Scanner;

public class CartesianCoordinateSystem {

	public static void main(String[] args) {
		// Variables
		BigDecimal x, y; 
				
		// Input
		try(Scanner input = new Scanner(System.in)) {
			x = new BigDecimal(input.nextLine());
			y = new BigDecimal(input.nextLine());
		}		
		
		// Calculation and output
		if(x.compareTo(BigDecimal.ZERO)==0 && y.compareTo(BigDecimal.ZERO)==0) {
			System.out.println(0);
		} else if(x.compareTo(BigDecimal.ZERO)==0 && y.compareTo(BigDecimal.ZERO)!=0) {
			System.out.println(5);
		} else if(x.compareTo(BigDecimal.ZERO)!=0 && y.compareTo(BigDecimal.ZERO)==0) {
			System.out.println(6);
		} else if(x.compareTo(BigDecimal.ZERO) > 0 && y.compareTo(BigDecimal.ZERO) > 0) {
			System.out.println(1);
		} else if(x.compareTo(BigDecimal.ZERO) > 0 && y.compareTo(BigDecimal.ZERO) < 0) {
			System.out.println(4);
		} else if(x.compareTo(BigDecimal.ZERO) < 0 && y.compareTo(BigDecimal.ZERO) > 0) {
			System.out.println(2);
		} else if(x.compareTo(BigDecimal.ZERO) < 0 && y.compareTo(BigDecimal.ZERO) < 0) {
			System.out.println(3);
		} 
	}
}