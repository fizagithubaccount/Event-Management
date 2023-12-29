package com.edubridge.event.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="events")
public class Events {

	@Id
	private Integer eventId;
	private String eventName;
	private String image;
	public Events() {
		super();
	}
	public Events(Integer eventId, String eventName, String image) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.image = image;
	}
	public Integer getEventId() {
		return eventId;
	}
	public void setEventId(int eventId) {
		this.eventId = eventId;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Events [eventId=" + eventId + ", eventName=" + eventName + ", image=" + image + "]";
	}
	
}