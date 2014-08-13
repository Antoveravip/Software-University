import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Scanner;

public class BitFlipper {

	public static void main(String[] args) {
		// First way by switching between BigDecimal and BigInteger and working with
		// BitInteger's bit possibilities
		/*
		// Variables
		BigDecimal number;
		int currentBit = -1, previousBit = -1, count = 3, length = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			number = new BigDecimal(input.nextLine());
		}
		
		// For testing the binary visualization
		// viewBinary(number);
		
		// Calculation
		int bitLen = number.toBigInteger().bitLength();
		if(bitLen < 64) {
			for(int n = 64; n > bitLen; n--) {
				number = new BigDecimal(number.toBigInteger().setBit(64));
			}
		}
		
		// For testing the binary visualization
		// viewBinary(number);

        for (int bitPos = 64; bitPos >= 0; bitPos--){
        	boolean checkBit = number.toBigInteger().testBit(bitPos);
        	if(checkBit) {
        		currentBit = 1;
        	} else if(!checkBit) {
        		currentBit = 0;
        	}
        	
            if (currentBit == previousBit) {
            	length++;
            	if(length == count){
            		if(currentBit == 1) {
            			for(int k = bitPos+2; k >= bitPos; k--) {
            				number = new BigDecimal(number.toBigInteger().flipBit(k));            				
            			}
            		} else if(currentBit == 0){
            			for(int m = bitPos+2; m >= bitPos; m--) {
            				number = new BigDecimal(number.toBigInteger().clearBit(m));
            				number = new BigDecimal(number.toBigInteger().setBit(m));
            			}
            		}
            		
        			length = 0;
            	}
            } else {
                length = 1;
            }
            
            previousBit = currentBit;
        }
        
        number = new BigDecimal(number.toBigInteger().clearBit(64));
        
        // For testing the binary visualization
        // viewBinary(number);
        
        // Output
        BigDecimal flippedNumber = new BigDecimal(number.toBigInteger());
        System.out.println(flippedNumber);
        */
        // Second way with StringBuilder, BigDecimal and BigInteger
        
		// Variables
		String inputData = "";
		int currentBit = -1, previousBit = -1, count = 3, length = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			inputData = new BigDecimal(input.nextLine()).toBigInteger().toString(2);
			inputData = String.format("%64s", inputData).replace(" ", "0");
		}
        // For testing the binary visualization
        // System.out.println(inputData);
        
		// Calculation
		StringBuilder binary = new StringBuilder();
		int dLength = inputData.length();
        for (int bitPos = 0; bitPos <= dLength-1; bitPos++){
            currentBit = inputData.charAt(bitPos) & 1;
            binary.append(currentBit);
            if (currentBit == previousBit) {
            	length++;
            	if(length == count){
            		if(currentBit == 1) {
            			for(int k = bitPos-2; k <= bitPos; k++) {
            				binary.setCharAt(k, '0');
            			}
            		} else if(currentBit == 0){
            			for(int m = bitPos-2; m <= bitPos; m++) {
            				binary.setCharAt(m, '1');
            			}
            		}
            		
        			length = 0;
            	}
            } else {
                length = 1;
            }
            
            previousBit = currentBit;
        }
        
        // For testing the binary visualization
        // System.out.println(binary);        
        
        // Output
        BigInteger number = new BigInteger(binary.toString(), 2);
        System.out.println(number);
        
	}
	/*	
	private static void viewBinary(BigDecimal number) {
		String inputData = number.toBigInteger().toString(2);
		System.out.println(inputData);
	}
	*/
}