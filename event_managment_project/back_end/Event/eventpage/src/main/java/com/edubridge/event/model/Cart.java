package com.edubridge.event.model;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Cart")
public class Cart {

	@Id
	
	private Integer cartId;
	
	private String cartProducts;
	private Double total;
	public Cart(Integer cartId, String cartProducts, Double total) {
		super();
		this.cartId = cartId;
		this.cartProducts = cartProducts;
		this.total = total;
	}
	public Cart() {
		super();
	}
	public Integer getCartId() {
		return cartId;
	}
	public void setCartId(Integer cartId) {
		this.cartId = cartId;
	}
	public String getCartProducts() {
		return cartProducts;
	}
	public void setCartProducts(String cartProducts) {
		this.cartProducts = cartProducts;
	}
	public Double getTotal() {
		return total;
	}
	public void setTotal(Double total) {
		this.total = total;
	}
	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", cartProducts=" + cartProducts + ", total=" + total + "]";
	}
}