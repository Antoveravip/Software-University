import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

/*
We are given a sequence of N playing cards from a standard deck.
The input consists of several cards (face + suit), separated by a
space. Write a program to calculate and print at the console the 
frequency of each card face in format "card_face -> frequency". 
The frequency is calculated by the formula appearances / N and is 
expressed in percentages with exactly 2 digits after the decimal 
point. The card faces with their frequency should be printed in 
the order of the card face's first appearance in the input. The 
same card can appear multiple times in the input, but it's face 
should be listed only once in the output. 
*/
public class CardsFrequencies {

	public static void main(String[] args) {
		// Variables
		String[] cards;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			cards = input.nextLine().split("[ ♥♣♦♠]+");
		}
		
		// Calculation
		Map<String, Integer> cardsFreq = new LinkedHashMap<String, Integer>();
		for (String card : cards) {
			Integer count = cardsFreq.get(card);
			if (count == null) {
				count = 0;
			}
			cardsFreq.put(card, count + 1);
		}
		
		// Output		
		for (Map.Entry<String, Integer> cardsFrequency : cardsFreq.entrySet()) {
			double precentage = (double) cardsFrequency.getValue() * 100 / cards.length;
			System.out.printf("%s -> %.2f%%\n", cardsFrequency.getKey(), precentage);
		}
	}
}