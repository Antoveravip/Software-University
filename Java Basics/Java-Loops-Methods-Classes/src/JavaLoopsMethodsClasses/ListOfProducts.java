package JavaLoopsMethodsClasses;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
Create a class Product to hold products, which have name 
(string) and price (decimal number). Read from a text file
named "Input.txt" a list of products. Each product will be 
in format name + space + price. You should hold the products 
in objects of class Product. Sort the products by price and 
write them in format price + space + name in a file named 
"Output.txt". Ensure you close correctly all used resources.
*/
public class ListOfProducts {

	public static void main(String[] args) {
		// Variables
		List<Product> products = new ArrayList<Product>();
		String inputFileName = "input_2.txt";
		String outputFileName = "output.txt";
		
		// Input
		try(BufferedReader fileReader = new BufferedReader(new FileReader(inputFileName))) {
			String[] currentProduct = new String[2];
			String line = fileReader.readLine();
			
			while(line != null) {
				currentProduct = line.split(" ");
				products.add(new Product(currentProduct[0], new BigDecimal(currentProduct[1])));
				line = fileReader.readLine();
			}
		} catch (IOException ioex) {
			System.err.printf("Can't read from file %s !", inputFileName);
			System.out.println(ioex.getMessage());
		}
		
		// Calculations
		Collections.sort(products);
		
		// For tests view in console
		for(Product product : products) {
			System.out.println(product.toString());
		}
		
		// Output
		try(BufferedWriter fileWriter = new BufferedWriter(new FileWriter(outputFileName, false))) {
			for(Product product : products) {
				fileWriter.write(product.toString());
				fileWriter.newLine();
			}
		} catch (IOException ioex) {
			System.err.printf("Can't write to file %s !", outputFileName);
		}
		
		System.out.println("Done!");
	}
}