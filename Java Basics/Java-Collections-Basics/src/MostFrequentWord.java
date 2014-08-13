import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

/*
Write a program to find the most frequent word in a text and print it,
as well as how many times it appears in format "word -> count". 
Consider any non-letter character as a word separator. Ignore the 
character casing. If several words have the same maximal frequency, 
print all of them in alphabetical order. 
*/
public class MostFrequentWord {

	public static void main(String[] args) {
		// Variables
		String[] text;
		int maxCount = 0;
		
		// Input
		try(Scanner input = new Scanner(System.in)) {
			text = input.nextLine().toLowerCase().split("[\\W' ]+");
		}
		
		// Calculation
		Map<String, Integer> words = new TreeMap<String, Integer>();
		for (String word : text) {
			Integer count = words.get(word);
			if (count == null) {
				count = 0;
			}
			if (count + 1 > maxCount) {
				maxCount = count + 1;
			}
			words.put(word, count + 1);
		}
		
		// Output
		for (Map.Entry<String, Integer> mostFrequentWord : words.entrySet()) {
			if (mostFrequentWord.getValue() == maxCount) {
				System.out.printf("%s -> %d times\n", mostFrequentWord.getKey(), mostFrequentWord.getValue());
			}
		}
	}
}