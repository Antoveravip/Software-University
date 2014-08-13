import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class LogsAggregator {

	public static void main(String[] args) {
		// Variables
		String[] inputData;
		int num = 0;
		TreeMap<String, TreeMap<String, Integer>> sessionDetails = new TreeMap<String, TreeMap<String, Integer>>();

		// Input and calculation
		try(Scanner input = new Scanner(System.in)) {
			num = Integer.parseInt(input.nextLine());
			for(int in = 0; in < num; in++) {
				// Take every line, split and set each part to variables 
				inputData = input.nextLine().split(" ");	
				String user = inputData[1];
				String ip = inputData[0];
				Integer duration = Integer.parseInt(inputData[2]);
				String users = user, ips = ip;
				TreeMap<String, Integer> details = sessionDetails.get(users);
				if(details == null) {
					details = new TreeMap<String, Integer>();
				}
				
				Integer amounts = details.get(ips);
					if (amounts == null) {
						amounts = 0;
					}
					
					details.put(ip, amounts + duration);
					sessionDetails.put(user, details);
			}			
		}
		
		// Build output
		StringBuilder output = new StringBuilder();
		for(Map.Entry<String, TreeMap<String, Integer>> entry : sessionDetails.entrySet()) {
			  String key = entry.getKey();
			  TreeMap<String, Integer> values = entry.getValue();
			  String ipData = "";
			  int countDuration = 0;
			  output.append(key + ": ");
			  String separator = "";
			  for(Map.Entry<String, Integer> prodInfos : values.entrySet()) {
				  String intProtocol = prodInfos.getKey();
				  Integer count = prodInfos.getValue();
				  countDuration += count;
				  ipData += separator;
				  separator = ", ";
				  ipData += intProtocol;		  
			  }
			  output.append(countDuration);
			  output.append(" [" + ipData + "]\r\n");
			}
		
		// Output	
		System.out.println(output);
	}
}