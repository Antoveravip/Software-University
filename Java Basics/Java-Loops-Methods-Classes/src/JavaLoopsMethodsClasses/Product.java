package JavaLoopsMethodsClasses;

import java.math.BigDecimal;



public class Product implements Comparable<Product> {
	private String name;
	private BigDecimal price;
	
	public Product(String name, BigDecimal price) {
		setName(name);
		setPrice(price);
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		if(name.equals(" ") || name.equals("")) {
			// Return default value or error
			this.name = "missing name";
		} else {
			this.name = name;
		}
	}
	
	public BigDecimal getPrice() {
		return this.price;
	}
	
	public void setPrice(BigDecimal price) {
		if(price.equals(0)) {
			// Return default value or error
			this.price = new BigDecimal(0);
		} else {
			this.price = price;
		}
	}
	
	@Override
	public String toString() {
		return this.price + " " + this.name;
	} 
	
	@Override
	public int compareTo(Product someProduct) {
		return this.price.compareTo(someProduct.getPrice());
	}
}
