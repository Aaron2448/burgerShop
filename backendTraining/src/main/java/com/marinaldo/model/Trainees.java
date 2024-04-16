package com.marinaldo.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@ToString
@Entity
@Table(name = "trainees")
public class Trainees {

    public Trainees() {
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long trainee_id;
    
    @Column(nullable = false)
    private String name;
    
    @Column
    private String stream;
    
    @Column 
    private String academy;

	public void setName(String fullName) {
		name = fullName;
		
	}

	public void setStream(String stream2) {
		stream = stream2;
		
	}

	public void setAcademy(String academy2) {
		academy = academy2;
		
	}

	


   
}
