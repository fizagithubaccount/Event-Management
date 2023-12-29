package com.edubridge.app1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class Employee {

	@Id
	@GeneratedValue
	private Integer employeeId;
	private String employeeName;
	private String employeeEmail;
	private Long employeeMobile;
	private Double employeeSalary;
	public Employee() {
		super();
	}
	public Employee(Integer employeeId, String employeeName, String employeeEmail, Long employeeMobile,
			Double employeeSalary) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.employeeEmail = employeeEmail;
		this.employeeMobile = employeeMobile;
		this.employeeSalary = employeeSalary;
	}
	public Integer getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(Integer employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getEmployeeEmail() {
		return employeeEmail;
	}
	public void setEmployeeEmail(String employeeEmail) {
		this.employeeEmail = employeeEmail;
	}
	public Long getEmployeeMobile() {
		return employeeMobile;
	}
	public void setEmployeeMobile(Long employeeMobile) {
		this.employeeMobile = employeeMobile;
	}
	public Double getEmployeeSalary() {
		return employeeSalary;
	}
	public void setEmployeeSalary(Double employeeSalary) {
		this.employeeSalary = employeeSalary;
	}
	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", employeeEmail="
				+ employeeEmail + ", employeeMobile=" + employeeMobile + ", employeeSalary=" + employeeSalary + "]";
	}
	
	
}
