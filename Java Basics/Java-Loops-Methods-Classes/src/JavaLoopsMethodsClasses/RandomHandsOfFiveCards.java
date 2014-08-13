package JavaLoopsMethodsClasses;

import java.util.Random;
import java.util.Scanner;
/*
Write a program to generate n random hands of 5 different cards
form a standard suit of 52 cards. 
*/
public class RandomHandsOfFiveCards {

	public static void main(String[] args) {
		// Constants
		String[] faces = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };
		char[] suits = { '♣', '♦', '♥', '♠' };
		int cardInHand = 5;
		
		// Variables
		Random rand = new Random();
		int handsNumber = 0,
			faceLength = faces.length,
			suitsLength = suits.length,
			face = 0, suit = 0;
		// Input
		try(Scanner input = new Scanner(System.in)) {
			handsNumber = input.nextInt();
		}
		
		// Calculations
		// TODO: More precise way to randomize the cards
		for(int i = 0; i < handsNumber; i++) {
			for(int k = 0; k < cardInHand; k++) {
				face = rand.nextInt((faceLength - 0) - 1) + 1;
				suit = rand.nextInt((suitsLength - 0) - 1) + 1;
				
				// Output
				System.out.printf("%1$s%2$c ", faces[face], suits[suit]);
			}
			System.out.println();
		}
	}
}