package JavaLoopsMethodsClasses;

import java.text.ParseException;
import java.text.SimpleDateFormat;
//import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Scanner;
//import java.util.concurrent.TimeUnit;
/*
Write a program to calculate the difference between two dates 
in number of days. The dates are entered at two consecutive 
lines in format day-month-year. Days are in range [1…31]. 
Months are in range [1…12]. Years are in range [1900…2100]. 
*/
public class DaysBetweenTwoDates {

	public static void main(String[] args) {
		// Variables
		//DateTimeFormatter inputDateFormat = DateTimeFormat.forPattern("dd-MM-yyyy");
		SimpleDateFormat inputDateFormat = new SimpleDateFormat("dd-MM-yyyy");
		String firstDate = "", secondDate = "";
		double difference = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			//System.out.print("Enter first date: ");
			firstDate = input.next();
			//System.out.print("Enter second date: ");
			secondDate = input.next();
		}
		
		// Calculations
		try {
			Date startDate = inputDateFormat.parse(firstDate);
			Date endDate = inputDateFormat.parse(secondDate);
			difference = endDate.getTime() - startDate.getTime();
		}
		catch (ParseException parsex) {
			parsex.printStackTrace();
		}
		
		difference = Math.floor(difference / 1000L / 60L / 60L / 24L);
		//difference = Math.floor((TimeUnit.DAYS.convert(difference, TimeUnit.MILLISECONDS)));
		
		// Output
		System.out.printf("%.0f", difference);
	}
}