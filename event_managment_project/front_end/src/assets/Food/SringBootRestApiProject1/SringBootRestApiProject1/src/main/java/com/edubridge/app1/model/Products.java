package com.edubridge.app1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Products {

	@Id
	private Integer productId;
	private String productName;
	private Double productPrice;
	private String image;
	public Products() {
		super();
	}
	public Products(Integer productId, String productName, Double productPrice, String image) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.image = image;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Products [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", image=" + image + "]";
	}
	
	
}