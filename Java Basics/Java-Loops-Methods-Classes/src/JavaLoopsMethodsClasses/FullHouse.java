package JavaLoopsMethodsClasses;

/*
In most Poker games, the "full house" hand is defined as three 
cards of the same face + two cards of the same face, other than 
the first, regardless of the card's suits. The cards faces are 
"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" and 
"A". The card suits are "♣", "♦", "♥" and "♠". Write a program to
generate and print all full houses and print their number. 
*/

public class FullHouse {

	public static void main(String[] args) {
		// Constants
		String[] faces = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };
		char[] suits = { '♣', '♦', '♥', '♠' };
		
		// Variables
		int countFullHouse = 0,
			facesLength = faces.length,
			suitsLength = suits.length;
		// Calculations
		for (int i = 0; i < facesLength; i++) {
			for (int j = 0; j < facesLength; j++) {
				if(j == i){
					continue;
				}
				for (int k = 0; k < suitsLength; k++) {
					for (int m = k + 1; m < suitsLength; m++) {
						for (int l = m + 1; l < suitsLength; l++) {
							for (int n = 0; n < suitsLength; n++) {
								for (int o = n + 1; o < suitsLength; o++) {
									System.out.printf("(%s%c %s%c %s%c %s%c %s%c) ",
										faces[i], suits[k], faces[i], suits[m], faces[i], suits[l],
										faces[j], suits[n], faces[j], suits[o]);
									countFullHouse++;
								}
							}
						}
					}
				}
				System.out.println();
			}
		}
		
		// Output
		System.out.println("\r\n" + countFullHouse + " full houses");
	}
}