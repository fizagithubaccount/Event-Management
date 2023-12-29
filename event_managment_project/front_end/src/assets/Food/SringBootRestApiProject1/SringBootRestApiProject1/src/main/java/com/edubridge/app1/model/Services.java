package com.edubridge.app1.model;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="service")
public class Services {

	@Id
	
	private Integer serviceId;
	private String serviceName;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "serviceId")
	private Set<Products> serviceProducts;
	public Services() {
		super();
	}
	public Services(Integer serviceId, String serviceName, Set<Products> serviceProducts) {
		super();
		this.serviceId = serviceId;
		this.serviceName = serviceName;
		this.serviceProducts = serviceProducts;
	}
	public Integer getServiceId() {
		return serviceId;
	}
	public void setServiceId(Integer serviceId) {
		this.serviceId = serviceId;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public Set<Products> getServiceProducts() {
		return serviceProducts;
	}
	public void setServiceProducts(Set<Products> serviceProducts) {
		this.serviceProducts = serviceProducts;
	}
	@Override
	public String toString() {
		return "Services [serviceId=" + serviceId + ", serviceName=" + serviceName + ", serviceProducts="
				+ serviceProducts + "]";
	}
	
	
	
	
}