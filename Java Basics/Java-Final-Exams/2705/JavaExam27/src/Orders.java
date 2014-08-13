import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Orders {

	public static void main(String[] args) {
		// Variables
		String[] inputData;
		int num = 0;
		Map<String, TreeMap<String, Integer>> productsDetails = new LinkedHashMap<String, TreeMap<String, Integer>>();

		// Input and calculation
		try(Scanner input = new Scanner(System.in)) {
			num = Integer.parseInt(input.nextLine());
			for(int in = 0; in < num; in++) {
				// Take every line, split and set each part to variables 
				inputData = input.nextLine().split(" ");	
				String product = inputData[2];
				String name = inputData[0];
				Integer amount = Integer.parseInt(inputData[1]);
				String products = product, names = name;
				TreeMap<String, Integer> details = productsDetails.get(products);
				if(details == null) {
					details = new TreeMap<String, Integer>();
				}
				
				Integer amounts = details.get(names);
					if (amounts == null) {
						amounts = 0;
					}
					
					details.put(name, amounts + amount);
					productsDetails.put(product, details);
			}			
		}
		
		// Build output
		StringBuilder output = new StringBuilder();
		for(Map.Entry<String, TreeMap<String, Integer>> entry : productsDetails.entrySet()) {
			  String key = entry.getKey();
			  TreeMap<String, Integer> values = entry.getValue();
			  output.append(key + ": ");
			  String separator = "";
			  for(Map.Entry<String, Integer> prodInfos : values.entrySet()) {
				  String customer = prodInfos.getKey();
				  Integer count = prodInfos.getValue();
				  output.append(separator);
				  separator = ", ";
				  output.append(customer + " " + count);				  
			  }
			  output.append("\r\n");
			}
		
		// Output	
		System.out.println(output);
	}
}