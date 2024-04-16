package com.marinaldo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@ToString
public class TraineeDTO {

	String fullName; 
	String stream;
	String academy;
	
	public String getFullName() {
		// TODO Auto-generated method stub
		return fullName;
	}
	public String getStream() {
		// TODO Auto-generated method stub
		return stream;
	}
	public String getAcademy() {
		// TODO Auto-generated method stub
		return academy;
	}
	
	
}
