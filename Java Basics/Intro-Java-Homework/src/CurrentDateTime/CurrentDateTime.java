package CurrentDateTime;
import java.time.LocalDateTime;

public class CurrentDateTime {

	public static void main(String[] args) {
		LocalDateTime currentDateTime = LocalDateTime.now();
		System.out.println(currentDateTime);
	}
}